
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { FooterComponent } from './headerandfooter/footer/footer.component';
import { HeaderComponent } from './headerandfooter/header/header.component';
import { MaintabsComponent } from './maintabs/maintabs.component';


declare let ga: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

title = 'SmartNow - Keeping You Warm | Oil Tanks | Tank Installs | Huge Electricity Bill Savings | Never Run Out of Oil Again';

constructor(public router: Router, 
            private meta: Meta,
            private titleService: Title) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        ga('set', 'page', event.urlAfterRedirects);
        ga('send', 'pageview');
      }
    });
  }

ngOnInit() {
      this.titleService.setTitle(this.title);
      this.meta.addTags([
        { name: 'description', content: "Shop from the largest range of Heating Oil tanks - Buy with Confidence from the UK's Largest Independent Online Fuel Tank Retailer"},
        { name: 'keywords', content: 'Domestic Heating Oil Tank, BoilerJuice Connected, Bulb, oil tank installer, bunded tank, slimline tank, oil tanks, diesel tanks, kerosene tanks, deso tanks, harlequin tanks, titan tanks, carbery tanks, diamond tanks, envirostore tanks' },
        { name: 'robots', content: 'index, follow' },
        { name: 'author', content: 'SmartNow Ltd' },
        { name: 'viewport', content: 'width=device-width' },
        { name: 'date', content: '2020-02-04', scheme: 'YYYY-MM-DD' },
        { charset: 'UTF-8' }
      ]);
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




