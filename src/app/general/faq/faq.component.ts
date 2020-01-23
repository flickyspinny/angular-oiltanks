import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FAQComponent implements OnInit {

  title = 'SmartNow - Keeping You Warm | Frequently Asked Questions | FAQs'

  constructor(
    private meta: Meta,
    private titleService: Title){};

ngOnInit() {
      this.titleService.setTitle(this.title);
    }

}