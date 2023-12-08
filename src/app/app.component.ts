import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'accessible-website';
  route: string;
  currentURL='';

  constructor(private router: Router) { 
    router.events.pipe(
      filter(event => event instanceof NavigationEnd)
  )
      .subscribe((event: any) => {
        
        console.log(event.url);
        

        switch(event.url) {
          case '/' : this.title = 'Home Page';
          break;
          case '/services': this.title = 'Services';
          break;
          case '/schedule-call': this.title = 'Schedule Call';
          break;
          default : this.title = 'Accessible Project';
          break;
        }

      });
  
      
  }




 

}
