const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@json': path.resolve(__dirname, 'src/json'),
      '@items': path.resolve(__dirname, 'src/items'),
    },
    "compilerOptions": {
      "baseUrl": "src"
    },
    "include": [
        "src"
    ]
  },
};