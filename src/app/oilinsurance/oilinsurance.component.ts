import { Component, OnInit } from '@angular/core';
import { tanks } from '../../tanks';
import { Title, Meta } from '@angular/platform-browser';




@Component({
  selector: 'app-oilinsurance',
  templateUrl: './oilinsurance.component.html',
  styleUrls: ['./oilinsurance.component.css']
})

export class OilinsuranceComponent  implements OnInit{

title = 'Protect yourself with Oil Theft and Oil Tank Insurance from SmartNow';

constructor(
  private meta: Meta,
  private titleService: Title){};


ngOnInit() {
      this.titleService.setTitle(this.title);
    }
    
}


