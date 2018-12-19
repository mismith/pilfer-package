#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const keys = process.argv.slice(2);
const file = path.resolve('package.json');

const json = JSON.parse(fs.readFileSync(file, 'utf8'));
const pilfered = keys.reduce((acc, key) => ({ ...acc, [key]: json[key] }), {});

console.log(JSON.stringify(pilfered, null, 2));
