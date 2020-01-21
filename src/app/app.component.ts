
import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';

declare let ga: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

constructor(public router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        ga('set', 'page', event.urlAfterRedirects);
        ga('send', 'pageview');
      }
    });
  }



//constructor(analytics: AngularFireAnalytics) {
//  analytics.logEvent('page_view', {page: "dashboard"});
//  console.log('page_view');
//}
//     this.router.events.subscribe(event => {
//      if (event instanceof NavigationEnd) { 
//        analytics.logEvent(event.urlAfterRedirects);
//        console.log(event.urlAfterRedirects);
//        }
//      })





  onChange($event) {
    console.log($event);
  }

}




