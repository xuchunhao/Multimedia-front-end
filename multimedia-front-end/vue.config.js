var webpack=require("webpack");

module.exports = {
  outputDir: './myDist',
  devServer:{
    port:12580,
    proxy:{
      '/api': {
        target: 'https://dmt.lcworkroom.cn'
      }
    }
  },
  // plugins: [
  //   //new config.optimization.splitChunks('common.js'),
  //   // new webpack.ProvidePlugin({
  //   //   jQuery: "jquery",
  //   //   $: "jquery"
  //   //   })
  //   ]
  // plugins: [
  //   new webpack.ProvidePlugin({
  //     $: "jquery",
  //     jQuery: "jquery"
  //   }),
  // ]
}