import { Component } from '@angular/core';

@Component({
    selector: 'pm-app',
    template: `
    <div>
        <nav class='navbar navbar-default'>
            <div class='container-fluid'>

                <ul class='nav navbar-nav'>
                    <li><a class='navbar-brand bounce-animation'>{{pageTitle}}</a></li>
                    <li><a [routerLink]="['/welcome']" class='bounce-animation'>Home</a></li>
                    <li><a [routerLink]="['/projects']" class='bounce-animation'>Project List</a></li>
                </ul>
                <ul class='nav navbar-nav navbar-right'>
                    <li><a href="" class='bounce-animation'>Login</a></li>
                    <li><a href="" class='bounce-animation'>English</a></li>
                </ul>

            </div>
        </nav>
        <div class='container'>
            <router-outlet></router-outlet>
        </div>
     </div>
     `
})
export class AppComponent {
    pageTitle: string = 'Labbersville';
}
