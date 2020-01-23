import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.css']
})
export class PrivacyComponent implements OnInit {


  title = 'SmartNow - Keeping You Warm | Privacy Policy'
  constructor(
    private meta: Meta,
    private titleService: Title){};

ngOnInit() {
      this.titleService.setTitle(this.title);
    }

}