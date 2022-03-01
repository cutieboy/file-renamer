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
  //df0f3f03kf0-blah.png
  //['df0f3f03kf0', 'blah']
  //blah.png
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

  rename(
    imageDirPath + `/${file}`,
    rootPath + `/output/${newString}`,
    (err) => err && console.log(err)
  );

  console.log(newString);
});
