import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.css']
})
export class TermsComponent implements OnInit {

  title = 'SmartNow - Keeping You Warm | Terms and Conditions'

  constructor(
    private meta: Meta,
    private titleService: Title){};

ngOnInit() {
      this.titleService.setTitle(this.title);
    }

}