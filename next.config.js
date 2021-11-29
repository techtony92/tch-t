const webpack = require("webpack");
const {parsed:chatEnv} = require("dotenv").config({path: "./.env"});


module.exports = {
    webpack(config){
        config.plugins.push(new webpack.EnvironmentPlugin(chatEnv))
        return config
    }
}