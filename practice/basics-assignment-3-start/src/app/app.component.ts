import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isVisible: boolean = true;
  dates: Array<string> = [];

  onBtnClick() {
    this.isVisible = !this.isVisible;
    this.dates.push(String(Date.now()));
  }
}
