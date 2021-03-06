
module.exports = {

  /**
   * Vue PWA configuration.
   */
  pwa: {
    name: 'Muffin',
    themeColor: '#0D0F2B',
    msTileColor: '#0D0F2B',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    iconPaths: {
      favicon32: 'img/icons/favicon-32x32.png',
      favicon16: 'img/icons/favicon-16x16.png',
      appleTouchIcon: 'img/icons/apple-touch-icon-152x152.png',
      maskIcon: 'img/icons/safari-pinned-tab.svg',
      msTileImage: 'img/icons/msapplication-icon-144x144.png'
    },
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: 'service-worker.js'
    }
  },

  /**
   * Webpack configuration
   */
  configureWebpack: {
    //
  }

}
