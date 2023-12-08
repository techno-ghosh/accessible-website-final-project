import { Component } from '@angular/core';
import * as json from '../../assets/JSON/data.json'

@Component({
  selector: 'app-call-scheduler',
  templateUrl: './call-scheduler.component.html',
  styleUrls: ['./call-scheduler.component.css']
})
export class CallSchedulerComponent {

  public paragraphData: any = json;
  public showTextArea: boolean = false;
  public message: string = '';  
  public showError: boolean = false;
  public showSuccess: boolean = false;
  public businessName: string ;
  public phoneNumber: string ;
  public email: string ;

  toggleEditable(event: any) {

    // stupid and out of time workaround;
    var x = this.email;
    var y = this.businessName;
    var z = this.phoneNumber;

    if (event.target.checked ) {
        this.showTextArea = true;
    } else {
      this.showTextArea = false;
      this.showError = false;
    }

    this.email = x;
    this.businessName = y;
    this.phoneNumber = z;
    
    console.log(this.email,this.businessName,this.phoneNumber, x, y, z)

  }

  scroll(id: string) {
     let el: any = document.getElementById(id);
     el.scrollIntoView({behavior: 'smooth'});
     el.focus();
    
}


  formSubmission() {

    if(this.showTextArea == true) {
      if(this.message == '') {
        this.showError = true;
      
          this.scroll('error')
          let el: any = document.getElementById('alertMessage');
          el.focus();
        
        return ;
      } else {
        this.showError = false;
      }
    }
    
    if(this.email == '') {
      return;
    }
    if(this.businessName == '') {
      return;
    }
    if(this.phoneNumber == '') {
      return;
    }

    this.showSuccess = true;
    this.scroll('error')
    setTimeout(() => {
      this.showSuccess = false;
      this.businessName = ''
      this.phoneNumber = ''
      this.email = ''
      this.message = ''
    },2000)

  }



}
