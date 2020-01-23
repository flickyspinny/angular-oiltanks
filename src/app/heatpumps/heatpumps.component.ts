import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-heatpumps',
  templateUrl: './heatpumps.component.html',
  styleUrls: ['./heatpumps.component.css']
})
export class HeatpumpsComponent implements OnInit {

  title = 'Reduce your bills with a Heatpump - Get 3 Free Quotes Online';

  constructor(
    private meta: Meta,
    private titleService: Title){};

ngOnInit() {
      this.titleService.setTitle(this.title);
    }

}