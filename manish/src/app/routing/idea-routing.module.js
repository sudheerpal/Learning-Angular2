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
var router_1 = require('@angular/router');
var idea_create_component_1 = require('../components/ideas/idea-create.component');
var ideasRoutes = [
    { path: 'idea/create', component: idea_create_component_1.IdeaCreateComponent }
];
var IdeaRoutingModule = (function () {
    function IdeaRoutingModule() {
    }
    IdeaRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(ideasRoutes)],
            exports: [router_1.RouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], IdeaRoutingModule);
    return IdeaRoutingModule;
}());
exports.IdeaRoutingModule = IdeaRoutingModule;
//# sourceMappingURL=idea-routing.module.js.map