# pw compress build

Compress a folder(e.g build folder) to <project>-YYYYMMDDTHHmm.zip file.

## Install

```bash
yarn add pw-compress-build -D
```

## Usage

```bash
# compress build folder to <project>-YYYYMMDDTHHmm.zip file
pw-compress-build zip build
```

## Development

- add dependences: `yarn`
- link this package to global: `npm link`, and then we can test this package by `pw-compress-build zip build`.
