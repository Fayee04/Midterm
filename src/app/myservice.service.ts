import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor() { }
  showTodayDate() {
    let ndate = new Date();
    return ndate;
  }
  serviceproperty = 'My Service Component'; 
  name = 'Kristine Faith G. Tuazon';
}
