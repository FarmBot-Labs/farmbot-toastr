#!/bin/bash

npm install

# Recompile
rm -rf dist
mkdir dist
node_modules/typescript/bin/tsc

# Commit
echo "Now run this: "
echo "    git commit -am 'farmbot-toastr Version x.y.z'"
echo "    git push ____ master"
echo "    npm publish"
