"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestServiceError = void 0;
var axios_1 = require("axios");
var objecttoformdata_1 = require("objecttoformdata");
var RequestServiceError_1 = require("./RequestServiceError");
Object.defineProperty(exports, "RequestServiceError", { enumerable: true, get: function () { return RequestServiceError_1.default; } });
var RequestService = /** @class */ (function () {
    function RequestService(config) {
        if (config === void 0) { config = {}; }
        this.formData = false;
        var formData = config.formData, AxiosConfig = __rest(config, ["formData"]);
        this.config = __assign(__assign({}, AxiosConfig), { withCredentials: true });
        if (typeof formData === 'boolean') {
            this.formData = formData;
        }
        this.axios = axios_1.default.create(this.config);
        this.delete = this.delete.bind(this);
        this.get = this.get.bind(this);
        this.getUri = this.getUri.bind(this);
        this.head = this.head.bind(this);
        this.options = this.options.bind(this);
        this.patch = this.patch.bind(this);
        this.post = this.post.bind(this);
        this.put = this.put.bind(this);
        this.request = this.request.bind(this);
    }
    RequestService.prototype.delete = function (url, options) {
        if (options === void 0) { options = {}; }
        try {
            return this.axios.delete(url, __assign(__assign({}, this.config), options));
        }
        catch (error) {
            throw new RequestServiceError_1.default(error);
        }
    };
    RequestService.prototype.get = function (url, options) {
        if (options === void 0) { options = {}; }
        try {
            return this.axios.get(url, __assign(__assign({}, this.config), options));
        }
        catch (error) {
            throw new RequestServiceError_1.default(error);
        }
    };
    RequestService.prototype.getUri = function (options) {
        if (options === void 0) { options = {}; }
        return this.axios.getUri(__assign(__assign({}, this.config), options));
    };
    RequestService.prototype.head = function (url, options) {
        if (options === void 0) { options = {}; }
        try {
            return this.axios.head(url, __assign(__assign({}, this.config), options));
        }
        catch (error) {
            throw new RequestServiceError_1.default(error);
        }
    };
    RequestService.prototype.options = function (url, options) {
        if (options === void 0) { options = {}; }
        try {
            return this.axios.options(url, __assign(__assign({}, this.config), options));
        }
        catch (error) {
            throw new RequestServiceError_1.default(error);
        }
    };
    RequestService.prototype.patch = function (url, data, options) {
        if (options === void 0) { options = {}; }
        try {
            return this.axios.patch(url, this.prepareData(data), __assign(__assign({}, this.config), options));
        }
        catch (error) {
            throw new RequestServiceError_1.default(error);
        }
    };
    RequestService.prototype.post = function (url, data, options) {
        if (options === void 0) { options = {}; }
        try {
            return this.axios.post(url, this.prepareData(data), __assign(__assign({}, this.config), options));
        }
        catch (error) {
            throw new RequestServiceError_1.default(error);
        }
    };
    RequestService.prototype.put = function (url, data, options) {
        if (options === void 0) { options = {}; }
        try {
            return this.axios.put(url, this.prepareData(data), __assign(__assign({}, this.config), options));
        }
        catch (error) {
            throw new RequestServiceError_1.default(error);
        }
    };
    RequestService.prototype.request = function (options) {
        try {
            return this.axios.request(__assign(__assign({}, this.config), options));
        }
        catch (error) {
            throw new RequestServiceError_1.default(error);
        }
    };
    RequestService.prototype.prepareData = function (data) {
        if (this.formData) {
            return objecttoformdata_1.default(data);
        }
        return data;
    };
    RequestService.methods = {
        delete: 'delete',
        get: 'get',
        head: 'head',
        link: 'link',
        options: 'options',
        patch: 'patch',
        post: 'post',
        purge: 'purge',
        put: 'put',
        unlink: 'unlink',
    };
    RequestService.responseTypes = {
        arraybuffer: 'arraybuffer',
        blob: 'blob',
        document: 'document',
        json: 'json',
        stream: 'stream',
        text: 'text',
    };
    return RequestService;
}());
exports.default = RequestService;
//# sourceMappingURL=index.js.map