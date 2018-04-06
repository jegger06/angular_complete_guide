import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user = {
    email: '',
    subscription: 'Advanced',
    password: ''
  };
  subscriptions: Array<string> = ['Basic', 'Advanced', 'Pro'];

  onSubmit(form: NgForm) {
    form.reset();
  }
}
