module.exports = {
  webpack: (config, options, webpack) => {
    // Perform customizations to config
    // Important: return the modified config

    // console.log(config, options)

    // changes the name of the entry point from index -> main.js
    config.entry = {
      main: './index.js',
      // newEntryPoint: './file.js'
    }

    return config
  },
}
