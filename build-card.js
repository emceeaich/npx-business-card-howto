#!/usr/bin/node

// require Node.JS native modules
const path = require('path')
const fs = require('fs')

// require third-party modules
const chalk = require('chalk')
const boxen = require('boxen')

// set up Boxen options
const boxenOptions = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

const newLine = '\n'

const output = chalk.white(`Emma Humphries ☕🧞💻`) + newLine + newLine +
chalk.white('Engineering, Process and Program Management for the Open Web') + newLine + newLine + 
chalk.green('Birdsite @triagegirl') + newLine +
chalk.green('Mastodon @emceeaich@mastodon.social') + newLine +
chalk.green('GitHub @emceeaich') + newLine +
chalk.green.bold('https://emmas.site/') + newLine +
chalk.green.bold('https://emmah.net/') + newLine 

fs.writeFileSync(path.join(__dirname, 'bin/output'), chalk.magenta(boxen(output, boxenOptions)))