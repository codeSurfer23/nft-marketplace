/* config-overrides.js */
const webpack = require('webpack');

const { override, babelInclude } = require('customize-cra')
const path = require('path')

module.exports = override(
  babelInclude([
    path.resolve(__dirname, 'src'),
    path.resolve(__dirname, 'node_modules/react-virtualized-auto-sizer')
  ])
)

// yarn add -D @types/react-dom@17.0.0 @types/react@17.0.0

