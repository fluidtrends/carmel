"use strict";
var npm = require('npm');
module.exports = function (args) {
    return new Promise(function (resolve, reject) {
        var startTime = Date.now();
        // npm.load((err, npm) => {
        // npm.config.set('loglevel', 'silent')
        // npm.config.set('cache', '~/.carmel-npm')
        // npm.commands.install((error, result) => {
        //     console.log("DIIDIDID")
        //     if (error) {
        //         reject(error)
        //         return
        //     }
        var totalTime = (Date.now() - startTime);
        resolve({ totalTime: totalTime });
        // })
        // })
    });
};
//# sourceMappingURL=npm.js.map