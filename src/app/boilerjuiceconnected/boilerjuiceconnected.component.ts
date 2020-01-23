import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-boilerjuiceconnected',
  templateUrl: './boilerjuiceconnected.component.html',
  styleUrls: ['./boilerjuiceconnected.component.css']
})
export class BoilerjuiceconnectedComponent implements OnInit {

  title = 'SmartNow | Never Run Out of Oil Again and Reduce Your Bills'

  constructor(
    private meta: Meta,
    private titleService: Title){};

ngOnInit() {
      this.titleService.setTitle(this.title);
    }

}