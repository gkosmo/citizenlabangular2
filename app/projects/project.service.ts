import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Iproject } from './project';

@Injectable()
export class projectService {
    private _projectUrl = 'projects.json';

    constructor(private _http: Http) { }

    getprojects(): Observable<Iproject[]> {
        return this._http.get(this._projectUrl)
            .map((response: Response) => <Iproject[]> response.json())
            .do(data => console.log('All: ' +  JSON.stringify(data)))
            .catch(this.handleError);
    }

    getproject(id: number): Observable<Iproject> {
        return this.getprojects()
            .map((projects: Iproject[]) => projects.find(p => p.id === id));
    }

    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
