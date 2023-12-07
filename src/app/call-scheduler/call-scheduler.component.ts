import { Component } from '@angular/core';
import * as json from '../../assets/JSON/data.json'

@Component({
  selector: 'app-call-scheduler',
  templateUrl: './call-scheduler.component.html',
  styleUrls: ['./call-scheduler.component.css']
})
export class CallSchedulerComponent {

  public paragraphData: any = json;

}
