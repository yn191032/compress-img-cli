# compress-img-cli

A CLI tool for image compressing on node.js

## Install

From local repository for global usage.

```sh
sudo npm install -g .
```

## Command Line Options

```
compressimg <dir> [args]

Options:
      --help     Show help                                             [boolean]
      --version  Show version number                                   [boolean]
      
  -h, --height   Image height, default is auto             [number] [default: -1]
  -w, --width    Image width, default is auto              [number] [default: -1]
  -q, --quality  Image quality, default is 80              [number] [default: 100]
  -d, --dist     Image destination, default is ./processed [string] [default: "./processed"]
```
