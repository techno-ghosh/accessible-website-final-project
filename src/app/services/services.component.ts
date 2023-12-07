import { Component } from '@angular/core';
import * as json from '../../assets/JSON/data.json'

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {

  public paragraphData: any = json;


}
