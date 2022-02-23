const { readdirSync, mkdirSync, existsSync, rename } = require("fs");
const { resolve } = require("path");

const imageDirPath = resolve(__dirname, "./input");
const rootPath = resolve(__dirname, "./");

const files = readdirSync(imageDirPath);

files.forEach((file) => {
  if (file === "rename.js" || file === "package.json") {
    return;
  }
  const newName = file.split("-");
  let newString = "";

  if (newName.length > 1) {
    newName.forEach((string, index) => {
      if (index === 0) return;
      if (index === 1) return (newString += string);
      newString += `-${string}`;
    });
  }

  if (!existsSync("./output")) {
    mkdirSync("./output");
  }

  rename(imageDirPath + `/${file}`, rootPath + `/output/${newString}`, (err) =>
    console.log(err)
  );

  console.log(newString);
});
