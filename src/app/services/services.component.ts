import { Component } from '@angular/core';
import * as json from '../../assets/JSON/data.json'
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {

  public paragraphData: any = json;
  public base_url: string = environment.base_url;


}
