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
    private metaTagService: Meta;

ngOnInit() {
      this.titleService.setTitle(this.title);
      this.metaTagService.updateTag(
      { name: 'description', content: 'Never run out of oil again.  Smash your heating bills.  The best oil, gas and electricity deals tailored to you.' });
    }

}