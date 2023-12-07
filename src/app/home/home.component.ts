import { Component } from '@angular/core';
import * as json from '../../assets/JSON/data.json'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public paragraphBox:any = json;
  
  
  constructor() {

  }
}
