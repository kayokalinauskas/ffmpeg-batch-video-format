# Node.js Batch Video Format Conversion Script

This Node.js script is designed to recursively traverse a directory and its subdirectories, converting video files with the `.ts` extension into the `.mp4` format. It utilizes the popular [Fluent-FFmpeg](https://github.com/fluent-ffmpeg/node-fluent-ffmpeg) library for video format conversion.

## Prerequisites

Before using this script, make sure you have the following dependencies installed:

- [Node.js](https://nodejs.org/)
- [Fluent-FFmpeg](https://github.com/fluent-ffmpeg/node-fluent-ffmpeg)

## How It Works

The script will start processing files in the "FILES" directory inside the projects ROOT and its subdirectories, converting each `.ts` file to `.mp4`. The converted files will be saved in the same locations with the `.mp4` extension.

**Note:** Make sure you have backup copies of your original files since the script will overwrite existing `.mp4` files with the same name.

## Customize

If you want to customize the script further, you can modify the following variables:

- `INPUT_EXTENSION`: The input file extension to search for (default is `.ts`).
- `OUTPUT_EXTENSION`: The output file extension to use for conversion (default is `.mp4`).

You can also adjust the FFmpeg options used for conversion, such as video and audio codecs, by editing the following lines:

```javascript
var command = ffmpeg(`${directory}/${file}`)
  .audioCodec("copy")
  .videoCodec("copy")
  .format(OUTPUT_EXTENSION)
  .save(`${directory}/${fileName}.${OUTPUT_EXTENSION}`);
```
