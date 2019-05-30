Everything you need to get started with Babel 7. - Includes *nodemon* as dependency

# Setup
`npm install`
Installs all the depencies needed to compile your project + nodemon. 

## Build 
`npm run build`
 
 Runs `babel src --out-dir lib`

## Run
`npm start`

Runs `nodemon --watch src --exec \"npm run build && babel-node lib/index.js\"`
