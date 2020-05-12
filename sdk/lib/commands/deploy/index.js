"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var path = require('path');
var Command = require('../../Command');
var parseDomain = require("parse-domain");
var DeployCommand = /** @class */ (function (_super) {
    __extends(DeployCommand, _super);
    function DeployCommand(args) {
        return _super.call(this, args) || this;
    }
    Object.defineProperty(DeployCommand.prototype, "id", {
        get: function () { return _.ID; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeployCommand.prototype, "title", {
        get: function () { return _.TITLE; },
        enumerable: true,
        configurable: true
    });
    DeployCommand.prototype.ensureDomainIsHosted = function (session, domain) {
        session.logger.info('Ensuring the domain is hosted ...');
        return new Promise(function (resolve, reject) {
            domain.isHosted().then(function () {
                resolve(domain);
            })
                .catch(function () {
                domain.host().then(function () {
                    resolve();
                })
                    .catch(function (e) { return reject(e); });
            });
        });
    };
    DeployCommand.prototype.ensureBucketExists = function (session, bucket) {
        session.logger.info('Ensuring the bucket exists ...');
        return new Promise(function (resolve, reject) {
            bucket.exists().then(function () {
                resolve(bucket);
            })
                .catch(function () {
                bucket.create().then(function () {
                    resolve(bucket);
                })
                    .catch(function (e) { return reject(e); });
            });
        });
    };
    DeployCommand.prototype.ensureBucketIsLinked = function (session, domain) {
        session.logger.info('Ensuring bucket and domain are linked ...');
        return new Promise(function (resolve, reject) {
            domain.isBucketLinked().then(function () {
                resolve(domain);
            })
                .catch(function () {
                domain.linkBucket().then(function () {
                    resolve(domain);
                })
                    .catch(function (e) { return reject(e); });
            });
        });
    };
    DeployCommand.prototype.setupDomainBucket = function (session, domain, bucket) {
        var _this = this;
        return this.ensureDomainIsHosted(session, domain)
            .then(function () { return _this.ensureBucketExists(session, bucket); })
            .then(function () { return _this.ensureBucketIsLinked(session, domain); });
    };
    DeployCommand.prototype.prepareBucket = function (session) {
        var _this = this;
        session.workspace.reload();
        if (!session.workspace.data || !session.workspace.data.web || !session.workspace.data.web || !session.workspace.data.web.domain) {
            return Promise.reject(new Error(_.ERRORS.COULD_NOT_EXECUTE('the web domain is missing')));
        }
        var appDomain = session.workspace.data.web.domain;
        var dir = path.resolve(this.cwd, '.app', 'web');
        var domainStats = parseDomain(appDomain);
        var _a = require('awsome'), Domain = _a.Domain, Bucket = _a.Bucket;
        var tldDomain = new Domain({ name: domainStats.domain + "." + domainStats.tld });
        var domain = new Domain({ name: appDomain });
        var bucket = new Bucket({ name: appDomain, dir: dir, site: true });
        session.logger.info('Preparing for deployment ...');
        return this.setupDomainBucket(session, domain, bucket)
            .then(function () {
            if (!domainStats.subdomain) {
                var redirectBucket = new Bucket({ name: "www." + appDomain, site: { redirectTo: appDomain } });
                var redirectDomain_1 = new Domain({ name: "www." + appDomain });
                return _this.ensureBucketExists(session, redirectBucket).then(function () { return _this.ensureBucketIsLinked(session, redirectDomain_1); });
            }
        })
            .then(function () { return bucket; });
    };
    DeployCommand.prototype.upload = function (session, bucket) {
        session.logger.info('Uploading files to bucket ...');
        // return bucket.update()
    };
    DeployCommand.prototype.exec = function (session) {
        var _this = this;
        return _super.prototype.initialize.call(this, session)
            .then(function () { return _this.findCredentials(session); })
            .then(function () { return _this.prepareBucket(session); })
            .then(function (bucket) { return _this.upload(session, bucket); });
    };
    return DeployCommand;
}(Command));
exports.DeployCommand = DeployCommand;
_.TITLE = "Deploying";
_.ID = 'deploy';
//# sourceMappingURL=index.js.map