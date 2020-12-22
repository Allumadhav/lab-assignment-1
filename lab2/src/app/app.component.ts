import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

  styleUrls: ['./app.component.css']
})
export class AppComponent {
    hobbies: any[] = [
      {hobbie:'dancing'},
      {hobbie:'singing'},
      {hobbie:'drawing'},
      {hobbie:'dancing'},
      {hobbie:'skating'},
      ];
  title = 'lab2';
}
