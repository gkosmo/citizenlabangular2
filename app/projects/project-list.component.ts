import { Component, OnInit }  from '@angular/core';

import { Iproject } from './project';
import { projectService } from './project.service';

@Component({
    templateUrl: 'app/projects/project-list.component.html',
    styleUrls: ['app/projects/project-list.component.css']
})
export class projectListComponent implements OnInit {
    pageTitle: string = 'project List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string;
    errorMessage: string;

    projects: Iproject[];

    constructor(private _projectService: projectService) {

    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        this._projectService.getprojects()
                .subscribe(projects => this.projects = projects,
                           error => this.errorMessage = <any>error);
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'project List: ' + message;
    }
   tags = [
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
]
}
