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
var WelcomeComponent = (function () {
    function WelcomeComponent() {
        this.pageTitle = 'Welcome';
        this.trendingideas = [
            {
                "_id": "1",
                "author": "amuylaer",
                "baseScore": 2,
                "body": "The current bike parkings are always full... Make an extra parking next to the railway station.",
                "createdAt": "2015-08-01T04:57:16.219Z",
                "title": "More bike parkings at the train station"
            },
            {
                "_id": "2",
                "author": "Katlijndc",
                "baseScore": 1,
                "body": "Our city is missing a place where you can feel the vibe of the other countries. What if we found together a bar where they play African music, serve Asian street food and Argentinian wine? Hmm, can't wait for this little paradise in town. :-)",
                "createdAt": "2015-08-01T03:29:07.573Z",
                "title": "Meetup place for travellers"
            },
            {
                "_id": "3",
                "author": "wvransbe",
                "baseScore": 3,
                "body": "Let's be honest - what's so irritating as people that are impatiently waiting till the lights turn green? Instead, let us enjoy local artists' work while we're waiting till it's green. Win win, you see?",
                "createdAt": "2015-08-01T03:40:36.497Z",
                "title": "Allow street art at every traffic light"
            },
            {
                "_id": "4",
                "author": "amuylaer",
                "baseScore": 5,
                "body": "Fitness makes us healthy! Let's sport together in the park. :-)",
                "createdAt": "2015-08-01T04:54:53.711Z",
                "title": "Gym machines in the park"
            },
            {
                "_id": "5",
                "author": "CitizenLab",
                "baseScore": 4,
                "body": "A lot of pedestrians want to cross the road there. Currently, it's not safe for them and the cars are driving there at a high speed. Let's keep our city safe for pedestrian and cyclists and make a cross road there please.",
                "title": "Make a cross road just before the bridge",
            }
        ];
    }
    WelcomeComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/home/welcome.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], WelcomeComponent);
    return WelcomeComponent;
}());
exports.WelcomeComponent = WelcomeComponent;
//# sourceMappingURL=welcome.component.js.map