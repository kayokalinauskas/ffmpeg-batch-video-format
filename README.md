# Node.js Batch Video Format Conversion Script

This Node.js script is designed to recursively traverse a directory and its subdirectories, converting video files with the `.ts` extension into the `.mp4` format. It utilizes the popular [Fluent-FFmpeg](https://github.com/fluent-ffmpeg/node-fluent-ffmpeg) library for video format conversion.

## Prerequisites

Before using this script, make sure you have the following dependencies installed:

- [Node.js](https://nodejs.org/)
- [Fluent-FFmpeg](https://github.com/fluent-ffmpeg/node-fluent-ffmpeg)

## How It Works

1. The script recursively scans the specified directory for files with the `.ts` extension.
2. When a `.ts` file is found, it uses the `Fluent-FFmpeg` library to convert it to the `.mp4` format with the same video and audio codecs (copy mode).
3. The converted file is saved in the same directory with the same name but with the `.mp4` extension.

## Usage

1. Clone this repository or download the script.
2. Install the necessary dependencies by running `npm install` in the script's directory.
3. Place your `.ts` files in the "Files" directory or any subdirectories within it.

To run the script, execute the following command in your terminal:

```bash
node script.js
```
