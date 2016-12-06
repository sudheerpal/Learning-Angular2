//https://angular.io/docs/ts/latest/tutorial/toh-pt6.html
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/Rx');
require('rxjs/add/operator/toPromise');
var HttpService = (function () {
    function HttpService(http) {
        this.http = http;
        this.apiBaseUrl = "http://localhost:58551/api";
    }
    HttpService.prototype.configure = function () {
        var token = localStorage.getItem('token');
        var headers = new http_1.Headers();
        headers = new http_1.Headers({
            'Content-Type': 'application/json'
        });
        this.options = new http_1.RequestOptions({ headers: headers });
    };
    HttpService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    HttpService.prototype.search = function (url) {
        url = this.apiBaseUrl + "/" + url;
        this.configure();
        return this.http
            .get(url, this.options)
            .map(function (r) { return r.json(); });
    };
    HttpService.prototype.get = function (url) {
        url = this.apiBaseUrl + "/" + url;
        this.configure();
        return this.http.get(url, this.options)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    HttpService.prototype.post = function (url, data) {
        url = this.apiBaseUrl + "/" + url;
        this.configure();
        return this.http
            .post(url, JSON.stringify(data), this.options)
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    HttpService.prototype.delete = function (url) {
        url = this.apiBaseUrl + "/" + url;
        this.configure();
        return this.http.delete(url, this.options)
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    HttpService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], HttpService);
    return HttpService;
}());
exports.HttpService = HttpService;
//# sourceMappingURL=http.service.js.map