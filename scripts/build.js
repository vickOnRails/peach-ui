const path = require("path");
const { green, cyan, red } = require("chalk");
const { exec } = require("child_process");

const srcPath = path.join(__dirname, "../src");
const libPath = path.join(__dirname, "../lib");
const umdPath = path.join(libPath, "umd");

const buildUMD = async () => {
  console.log(cyan("Building UMD Modules"));

  // FIXME: Make this operation asynchronous
  exec(
    `npx babel ${srcPath} --out-dir ${umdPath} --env-name "umd"`,
    (error, stdout, stderr) => {
      if (error) {
        console.log(red(error));
        return;
      }

      console.log(green(stdout));
      console.log(red(stderr));
    }
  );
};

const buildCJS = () => {
  console.log(cyan("Building CJS Modules"));

  exec(
    `npx babel ${srcPath} --out-dir ${libPath} --env-name "cjs"`,
    (error, stdout, stderr) => {
      if (error) {
        console.log(red(error));
        return;
      }

      console.log(green(stdout));
      console.log(green(stderr));
    }
  );
};

buildUMD();
buildCJS();
