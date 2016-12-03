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
var project_service_1 = require('./project.service');
var projectListComponent = (function () {
    function projectListComponent(_projectService) {
        this._projectService = _projectService;
        this.pageTitle = 'project List';
        this.imageWidth = 50;
        this.imageMargin = 2;
        this.showImage = false;
        this.tags = [
            {
                "label": "unroyalist",
                "score": 0.113938
            },
            {
                "label": "traffic",
                "score": 0.544215
            },
            {
                "label": "streets",
                "score": 0.529549
            },
            {
                "label": "preserveress",
                "score": 0.733696
            },
            {
                "label": "traditionate",
                "score": 0.0488604
            },
            {
                "label": "codicillary",
                "score": 0.525574
            },
            {
                "label": "unsealable",
                "score": 0.833819
            },
            {
                "label": "echinital",
                "score": 0.425693
            },
            {
                "label": "architecture",
                "score": 0.366833
            },
            {
                "label": "culture",
                "score": 0.88699
            },
            {
                "label": "unquotable",
                "score": 0.260472
            },
            {
                "label": "avowedly",
                "score": 0.0410126
            },
            {
                "label": "volubilate",
                "score": 0.506603
            },
            {
                "label": "paranuclein",
                "score": 0.994411
            },
            {
                "label": "disownable",
                "score": 0.386739
            },
            {
                "label": "together",
                "score": 0.518047
            },
            {
                "label": "neighbours",
                "score": 0.315571
            },
            {
                "label": "asexualization",
                "score": 0.713613
            }
        ];
    }
    projectListComponent.prototype.toggleImage = function () {
        this.showImage = !this.showImage;
    };
    projectListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._projectService.getprojects()
            .subscribe(function (projects) { return _this.projects = projects; }, function (error) { return _this.errorMessage = error; });
    };
    projectListComponent.prototype.onRatingClicked = function (message) {
        this.pageTitle = 'project List: ' + message;
    };
    projectListComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/projects/project-list.component.html',
            styleUrls: ['app/projects/project-list.component.css']
        }), 
        __metadata('design:paramtypes', [project_service_1.projectService])
    ], projectListComponent);
    return projectListComponent;
}());
exports.projectListComponent = projectListComponent;
//# sourceMappingURL=project-list.component.js.map