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
    // `npx tsc --rootDir ${srcPath} --outDir ${umdPath}`,
    `tsc --rootDir ${srcPath} --outDir ${umdPath} --declaration false`,
    (error, stdout, stderr) => {
      if (error) {
        console.log(red(error.message));
        return;
      }

      console.log(green(`UMD Modules Built`));
      console.log(red(stderr));
    }
  );
};

const buildCJS = () => {
  console.log(cyan("Building CJS Modules"));

  exec(
    `tsc --rootDir ${srcPath} --outDir ${cjsPath} --module commonjs --declaration false`,
    (error, stdout, stderr) => {
      if (error) {
        console.log(red(error.message));
        return;
      }

      console.log(green(`CJS Modules Built`));
      console.log(green(stderr));
    }
  );
};

const copyTypes = () => {
  console.log(cyan("Copying Types"));

  exec(
    // `npx babel ${srcPath} --out-dir ${libPath} --env-name "cjs"`,
    `tsc --emitDeclarationOnly --rootDir ${srcPath} --declarationDir ${typesPath} --declaration true`,
    (error, stdout, stderr) => {
      if (error) {
        console.log(red(error.message));
        return;
      }

      console.log(green(`Types Copied`));
      console.log(green(stderr));
    }
  );
};

buildUMD();
buildCJS();
copyTypes();
