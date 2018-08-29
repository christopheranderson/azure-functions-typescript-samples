# simple sample

1 function just to show bare bones TypeScript set up

## Overview

Only real thing to note here is that the build output is in a different directory from the source, so you need to modify the function.json to be specific on which file to load via `scriptfile`. It's relative from the funciton.json, so you need the `../` in it to get back to the project root.

## Quickstart

```shell
npm i
npm start
```

## VS Code

This also comes with VS settings that work if you just press F5 or launch. It's configured to make debugging possible with your .ts files, so give it a shot.