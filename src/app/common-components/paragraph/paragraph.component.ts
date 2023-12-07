import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-paragraph',
  templateUrl: './paragraph.component.html',
  styleUrls: ['./paragraph.component.css']
})
export class ParagraphComponent {

  @Input() heading: string;
  @Input() paragraph: string;

  constructor() {
  
  }

}
