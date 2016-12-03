import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Subscription }       from 'rxjs/Subscription';

import { Iproject } from './project';
import { projectService } from './project.service';

@Component({
    templateUrl: 'app/projects/project-detail.component.html'
})
export class projectDetailComponent implements OnInit, OnDestroy {
    pageTitle: string = 'Project Detail';
    project: Iproject;
    errorMessage: string;
    private sub: Subscription;

    constructor(private _route: ActivatedRoute,
                private _router: Router,
                private _projectService: projectService) {
    }

    ngOnInit(): void {
        this.sub = this._route.params.subscribe(
            params => {
                let id = +params['id'];
                this.getproject(id);
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    getproject(id: number) {
        this._projectService.getproject(id).subscribe(
            project => this.project = project,
            error => this.errorMessage = <any>error);
    }

    onBack(): void {
        this._router.navigate(['/projects']);
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'project Detail: ' + message;
    }
}
