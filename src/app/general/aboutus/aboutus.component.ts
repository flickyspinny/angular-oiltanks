import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  title = 'SmartNow - Keeping You Warm | All About Us'

  constructor(
    private meta: Meta,
    private titleService: Title){};

ngOnInit() {
      this.titleService.setTitle(this.title);
    }

}