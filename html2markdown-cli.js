#!/usr/bin/env node

var
  html2markdown         = require('html2markdown'),
  program               = require('commander'),
  fs                    = require('fs');


program
  .version('0.0.1')
  .usage('file')
  .parse(process.argv);

if(!program.args.length) {
    program.help();
} else {
    var fileName = program.args[0];

  fs.readFile(fileName, 'utf8', function (err, data) {
    if (err) throw err;

    console.log(html2markdown(data));
  });
}
