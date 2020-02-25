module.exports = ({
    "packagerConfig": {
        "icon": "assets/logo.icns"
      },
      "makers": [
        {
          "name": "@electron-forge/maker-squirrel",
          "config": {
            "name": "carmel"
          }
        },
        {
          "name": "@electron-forge/maker-dmg",
          "config": {
            "name": "chunky",
            "icon": "assets/logo.icns"
          }
        },
        {
          "name": "@electron-forge/maker-deb",
          "config": {}
        },
        {
          "name": "@electron-forge/maker-rpm",
          "config": {}
        }
      ],
      "plugins": [
        [
          "@electron-forge/plugin-webpack",
          {
            "mainConfig": "./desktop.main.config.js",
            "renderer": {
              "config": "./desktop.renderer.config.js",
              "entryPoints": [
                {
                  "html": "./desktop/ui/index.html",
                  "js": "./desktop/ui/index.js",
                  "name": "main_window"
                }
              ]
            }
          }
        ]
      ]
})