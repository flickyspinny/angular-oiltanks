import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-oiltankinstallers',
  templateUrl: './oiltankinstallers.component.html',
  styleUrls: ['./oiltankinstallers.component.css']
})
export class OiltankinstallersComponent implements OnInit {
  title = 'Get 3 Free Oil Tank Install Quotes Online From Your Best Local Installers | SmartNow ';

  constructor(
    private titleService: Title,
    private metaTagService: Meta
  ) { }

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.metaTagService.updateTag(
      { name: 'description', content: 'Find and get quotes from oil tank installers in the UK' }
    );
  }
}