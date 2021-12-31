/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var mergeConfig = function (config, defaultConfig) {
    return Object.assign(defaultConfig, config);
};

var DEFAULT_CONTENT_TYPE = {
    'Content-Type': 'application/x-www-form-urlencoded'
};
var TIMEOUT = 20000;
var defaultConfig = {
    url: "/",
    baseURL: '',
    timeout: TIMEOUT,
    headers: DEFAULT_CONTENT_TYPE,
};

var isAbsoluteURL = function (url) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
};
var buildFullUrl = function (baseURL, url) {
    return isAbsoluteURL(url) ? url : baseURL + url;
};
var request = function (config) { return __awaiter(void 0, void 0, void 0, function () {
    var newConfig, fullURL, response, error_1;
    var _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                newConfig = mergeConfig(config, defaultConfig);
                fullURL = buildFullUrl((_a = config.baseURL) !== null && _a !== void 0 ? _a : '', config.url);
                _c.label = 1;
            case 1:
                _c.trys.push([1, 3, , 4]);
                return [4, fetch(fullURL, {
                        method: (_b = newConfig.method) !== null && _b !== void 0 ? _b : 'get',
                        headers: newConfig.headers,
                        body: newConfig.data && JSON.stringify(newConfig.data)
                    })];
            case 2:
                response = _c.sent();
                return [2, response];
            case 3:
                error_1 = _c.sent();
                throw error_1;
            case 4: return [2];
        }
    });
}); };

var a = request({
    url: 'http://localhost:8088/downStatistics/getAllStatistics',
    headers: {
        'x-isGuidePage': 'true'
    },
    method: 'get',
});
a.then(function (v) { return __awaiter(void 0, void 0, void 0, function () {
    var json;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4, v.json()];
            case 1:
                json = _a.sent();
                console.log(json);
                return [2];
        }
    });
}); });
