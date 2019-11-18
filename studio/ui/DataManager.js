const tools = [
      {
        id: "hyper",
        title: "Hyper",
        subtitle: "Terminal",
        action: "Install",
        icon: "http://files.carmel.io/images/hyperjs-logo-120.png",
        downloadUrl: 'https://github.com/zeit/hyper/releases/download/3.0.2/Hyper-3.0.2.dmg'
      },
      {
        id: "vscode",
        title: "Visual Studio Code",
        subtitle: "1.38",
        action: "Install",
        icon: "http://files.carmel.io/images/vscode-logo-120.png",
        downloadUrl: 'https://go.microsoft.com/fwlink/?LinkID=620882'
      },
      {
        id: "chrome",
        title: "Chrome",
        subtitle: "1.38",
        action: "Install",
        icon: "http://files.carmel.io/images/chrome-logo-120.png",
        downloadUrl: 'https://github.com/zeit/hyper/releases/download/3.0.2/Hyper-3.0.2.dmg'
      },
      {
        id: "node",
        title: "Node.js",
        action: "Install",
        subtitle: "Javascript Environment",
        icon: "http://files.carmel.io/images/nodejs-logo-120.png",
        downloadUrl: 'https://github.com/zeit/hyper/releases/download/3.0.2/Hyper-3.0.2.dmg'
      },
      {
        id: "git",
        title: "Git",
        subtitle: "3.0.2",
        action: "Install",
        icon: "http://files.carmel.io/images/git-logo-120.png",
        downloadUrl: 'https://github.com/zeit/hyper/releases/download/3.0.2/Hyper-3.0.2.dmg'
      }
]

// const accounts = [
//     {
//       id: "aws",
//       title: "AWS",
//       subtitle: "3.0.2",
//       action: "Setup",
//       icon: "http://files.carmel.io/images/aws-logo-120.png"
//     },
//     {
//       id: "google",
//       title: "Google Cloud",
//       subtitle: "3.0.2",
//       action: "Setup",
//       icon: "http://files.carmel.io/images/googlecloud-logo-120.png"
//     }
// ]

class DataManager {
    constructor() {
      this._cache = {}
    }

    _getKeys() {
      return new Promise((resolve, reject) => {
        this._cache.keys = []
        resolve([])
      })
    }

    _getTools() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          this._cache.toolbox = tools
          resolve(tools)
        }, 1000)
      })
    }

    getData(type) {
      if (this._cache[type]) {
        return Promise.resolve(this._cache[type])
      }

      switch (type) {
        case "keystore":
          return this._getKeys()
        case "toolbox":
            return this._getTools()
        }
      return Promise.resolve([])
    }
}

export default DataManager