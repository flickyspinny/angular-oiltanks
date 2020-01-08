import { Pipe, PipeTransform } from '@angular/core';
import { tanks } from '../../tanks';

@Pipe({
  name: 'selectedTank'
})
export class SelectedtankPipe implements PipeTransform {

  // variable allProducts created to hold the data from the array "tanks[]""
  allProducts = tanks;

//transform Pipe with the inputs allProducts and _tankId
  transform(allProducts, _tankId: number): any {
  
  //Set the pipe to "safe" if either allProducts or tankId is null and stop it throwing an error
    if(!allProducts || !_tankId) {
      return
      console.log('allProducts or _tankId is null');
    }

    //If allProducts or tankId is not null then return the allProducts array where the tankID is equal to the input tankID
    return allProducts.filter(p => p.tankId === _tankId);
    console.log('hello');
  }

}