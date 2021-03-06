#!/usr/bin/env node

const path = require('path');
const {program} = require("commander");
const wordpressPo2Json = require("./build");
const version = require('./package.json').version;

program.version(version)
    .description("Generate JED1.x compatible JSON files from PO files for use in internationalization of Wordpress Gutenberg block.")
    .option('-lf --language-folder [languageFolder]', 'Language folder location with the po files, relative to the package.json.')
    .option('-wjh --wordpress-js-handle [wpJsHandle]', 'The handle used to refer the bundled JS of the Gutenberg block')
    .action(function (options) {

        global.appRoot = path.resolve(process.cwd());

        const languagesFolder = options.languageFolder ? `${appRoot}/${options.languageFolder}` : `${appRoot}/languages`;
        const wpJsHandleName = options.wordpressJsHandle ? options.wordpressJsHandle : null;

        wordpressPo2Json.generatePoJson({languagesFolderLocation: languagesFolder, wordpressJsHandleName: wpJsHandleName});

    })
    .parse();
