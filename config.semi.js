/*
|-------------------------------------------------------------------------------
| Development config               https://maizzle.com/docs/environments/#local
|-------------------------------------------------------------------------------
|
| The exported object contains the default Maizzle settings for development.
| This is used when you run `maizzle build` or `maizzle serve` and it has
| the fastest build time, since most transformations are disabled.
|
*/

module.exports = {
  build: {
    templates: {
      source: 'src/templates',
      destination: {
        path: './resources/views/email',
        extension: 'blade.php',
      },
      assets: {
        source: 'src/assets/images',
        destination: '../../../public/images/emails',
      },
    },
    tailwind: {
      css: 'src/assets/css/main.css',
    },
  },
}
