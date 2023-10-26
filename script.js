var ffmpeg = require("fluent-ffmpeg");
const fs = require("fs");
const path = require("path");

const directoryPath = path.join(__dirname, "Files");
const INPUT_EXTENSION = ".ts";
const OUTPUT_EXTENSION = "mp4";

function removeExtension(filename) {
  return filename.substring(0, filename.lastIndexOf(".")) || filename;
}

async function fileIsFolder(filename) {
  return filename.includes(INPUT_EXTENSION) ? false : true;
}

readDiretory(directoryPath);

async function readDiretory(directory) {
  fs.readdir(directory, (err, files) => {
    if (err) {
      return console.log(err);
    }

    files.forEach(async (file) => {
      console.log(await fileIsFolder(file));
      if ((await fileIsFolder(file)) === true) {
        readDiretory(`${directory}/${file}`);
        return 0;
      }
      const fileName = removeExtension(file);

      if ((await fileIsFolder(file)) === false) {
        var command = ffmpeg(`${directory}/${file}`)
          .audioCodec("copy")
          .videoCodec("copy")
          .format(OUTPUT_EXTENSION)
          .save(`${directory}/${fileName}.${OUTPUT_EXTENSION}`);
      }
    });
  });
}
