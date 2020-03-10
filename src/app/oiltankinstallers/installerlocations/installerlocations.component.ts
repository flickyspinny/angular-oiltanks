import { Component, OnInit } from '@angular/core';
import { locations } from '../../../locations';
import { ActivatedRoute, RouterModule, Router} from '@angular/router';

@Component({
  selector: 'app-installerlocations',
  templateUrl: './installerlocations.component.html',
  styleUrls: ['./installerlocations.component.css']
})
export class InstallerlocationsComponent implements OnInit {
  location = locations;


  constructor() { }

  ngOnInit() {

  }

}