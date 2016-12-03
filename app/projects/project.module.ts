import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

import { projectListComponent } from './project-list.component';
import { projectDetailComponent } from './project-detail.component';
import { projectDetailGuard } from './project-guard.service';

import { projectFilterPipe } from './project-filter.pipe';
import { projectService } from './project.service';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: 'projects', component: projectListComponent },
      { path: 'project/:id',
        canActivate: [ projectDetailGuard],
        component: projectDetailComponent
      }
    ])
  ],
  declarations: [
    projectListComponent,
    projectDetailComponent,
    projectFilterPipe
  ],
  providers: [
    projectService,
    projectDetailGuard
  ]
})
export class projectModule {}
