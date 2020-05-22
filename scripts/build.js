const path = require("path");
const { green, cyan, red } = require("chalk");
const { exec } = require("child_process");

const srcPath = path.join(__dirname, "../src");
const libPath = path.join(__dirname, "../lib");
const umdPath = path.join(libPath, "umd");
const cjsPath = path.join(libPath, "cjs");
const typesPath = path.join(libPath, "types");

const buildUMD = async () => {
  console.log(cyan("Building UMD Modules"));

  // FIXME: Make this operation asynchronous
  exec(
    `tsc --rootDir ${srcPath} --outDir ${umdPath} --declaration false`,
    (error, stderr) => {
      if (error) {
        console.log(red(error.message));
        return;
      }

      console.log(green("UMD Modules Built"));
      console.log(red(stderr.message));
    }
  );
};

const buildCJS = () => {
  console.log(cyan("Building CJS Modules"));

  exec(
    `tsc --rootDir ${srcPath} --outDir ${cjsPath} --module commonjs --declaration false`,
    (error, stderr) => {
      if (error) {
        console.log(red(error.message));
        return;
      }

      console.log(green("CJS Modules Built"));
      console.log(green(stderr));
    }
  );
};

const copyTypes = () => {
  console.log(cyan("Copying Types"));

  exec(
    `tsc --emitDeclarationOnly --declarationDir ${typesPath} --declaration true`,
    (error, stderr) => {
      if (error) {
        console.log(red(error.message));
        return;
      }

      console.log(green("Types Copied"));
      console.log(green(stderr));
    }
  );
};

buildUMD();
buildCJS();
copyTypes();
