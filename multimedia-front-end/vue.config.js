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
}