const PATH = require('path')
const HTML_WEBPACK_PLUGIN = require('html-webpack-plugin')
const WEBPACK_PWA_MANIFEST = require('webpack-pwa-manifest')
const WORKBOX_WEBPACK_PLUGIN = require('workbox-webpack-plugin')

module.exports = {
  entry: '/src/index.js',
  output: {
    path: PATH.resolve(__dirname, 'dist/'),
    filename: 'assets/js/[name].bundle.min.js',
    publicPath: '/'
  },
  resolve: {
    extensions: [ '.js', '.jsx' ],
    alias: {
      '@': PATH.resolve(__dirname, 'src/')
    }
  },
  module: {
    rules: [
      {
        test: /\.js|.jsx$/i,
        exclude: [ /node_modules/, /api/ ],
        use: {
          loader: 'babel-loader',
          options: {
            presets: [ '@babel/preset-env', '@babel/preset-react' ],
            plugins: [ '@babel/plugin-transform-runtime' ] }
        }
      }
    ]
  },
  plugins: [
    new HTML_WEBPACK_PLUGIN({
      title: 'Petgram',
      template: PATH.join(__dirname, '/public/index.html'),
      filename: 'index.html',
      minify: true
    }),
    new WEBPACK_PWA_MANIFEST({
      name: 'App de fotos de mascotas | Petgram',
      short_name: 'Petgram',
      description: 'Aquí encontrarás las mejores fotos de mascotas subidas por distintos usuarios',
      orientation: 'portrait',
      display: 'standalone',
      start_url: '/',
      scope: '/',
      background_color: '#55ce00',
      theme_color: '#bb6f3d',
      icons: [
        {
          src: PATH.resolve('src/assets/icons/icon.jpeg'),
          sizes: [
            96,
            128,
            192,
            256,
            384,
            512
          ]
        }
      ]
    }),
    new WORKBOX_WEBPACK_PLUGIN.GenerateSW({
      runtimeCaching: [
        {
          // eslint-disable-next-line prefer-regex-literals
          urlPattern: new RegExp('https://(res.cloudinary.com|images.unsplash.com)'),
          handler: 'CacheFirst',
          options: {
            cacheName: 'images'
          }
        },
        {
          // eslint-disable-next-line prefer-regex-literals
          urlPattern: new RegExp('https://petgram-server-clgg.vercel.app/graphql'),
          handler: 'NetworkFirst',
          options: {
            cacheName: 'api'
          }
        }
      ]
    })
  ]
}
