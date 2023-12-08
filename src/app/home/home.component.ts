import { Component } from '@angular/core';
import * as json from '../../assets/JSON/data.json'
import { MatDialog } from '@angular/material/dialog';
import { HomepagedialogComponent } from '../common-components/homepagedialog/homepagedialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public paragraphBox:any = json;
  
  
  constructor(public dialog: MatDialog) {

  }

  openDialog() {
    const dialogRef = this.dialog.open(HomepagedialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
