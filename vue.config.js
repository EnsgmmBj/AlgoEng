module.exports = {
  transpileDependencies: ["vuetify"],
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        // options placed here will be merged with default configuration and passed to electron-builder
        extraResources: ['src/res/'],
        publish: [{
          provider: "github",
          owner: "EnsgmmBj",
          repo: "AlgoEng"
        }],
      }
    }
  }
}