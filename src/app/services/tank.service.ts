import { Injectable } from '@angular/core';
import { tanks } from '../../tanks';

@Injectable()
export class TankService {

// This service returns the contents of 'tanks' when the getTanks() function is called

  constructor() { }
  getTanks() { 
    return tanks;
    console.log('service console log');
  }

}