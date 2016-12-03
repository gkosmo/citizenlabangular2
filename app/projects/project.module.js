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
var project_list_component_1 = require('./project-list.component');
var project_detail_component_1 = require('./project-detail.component');
var project_guard_service_1 = require('./project-guard.service');
var project_filter_pipe_1 = require('./project-filter.pipe');
var project_service_1 = require('./project.service');
var shared_module_1 = require('../shared/shared.module');
var projectModule = (function () {
    function projectModule() {
    }
    projectModule = __decorate([
        core_1.NgModule({
            imports: [
                shared_module_1.SharedModule,
                router_1.RouterModule.forChild([
                    { path: 'projects', component: project_list_component_1.projectListComponent },
                    { path: 'project/:id',
                        canActivate: [project_guard_service_1.projectDetailGuard],
                        component: project_detail_component_1.projectDetailComponent
                    }
                ])
            ],
            declarations: [
                project_list_component_1.projectListComponent,
                project_detail_component_1.projectDetailComponent,
                project_filter_pipe_1.projectFilterPipe
            ],
            providers: [
                project_service_1.projectService,
                project_guard_service_1.projectDetailGuard
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], projectModule);
    return projectModule;
}());
exports.projectModule = projectModule;
//# sourceMappingURL=project.module.js.map