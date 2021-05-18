var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var RequestServiceError = /** @class */ (function (_super) {
    __extends(RequestServiceError, _super);
    function RequestServiceError(AxiosError) {
        var _this = _super.call(this, AxiosError.code || AxiosError.message) || this;
        _this.name = 'RequestError';
        var code = AxiosError.code, config = AxiosError.config, isAxiosError = AxiosError.isAxiosError, request = AxiosError.request, response = AxiosError.response, toJSON = AxiosError.toJSON;
        _this.code = code;
        _this.config = config;
        _this.isAxiosError = isAxiosError;
        _this.request = request;
        _this.response = response;
        _this.toJSON = toJSON;
        return _this;
    }
    return RequestServiceError;
}(Error));
export default RequestServiceError;
//# sourceMappingURL=index.js.map