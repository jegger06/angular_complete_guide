import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  projectForm: FormGroup;
  status: Array<string> = ['Stable', 'Critical', 'Finished'];
  selected: string = this.status[1];

  ngOnInit() {
    this.projectForm = new FormGroup({
      'projectName': new FormControl('', Validators.required, this.notValidProject),
      'email': new FormControl('', [Validators.required, Validators.email]),
      'projectStatus': new FormControl(this.selected, Validators.required)
    });
  }

  onSubmit() {
    console.log(this.projectForm.value)
  }

  notValidProject(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if ((control.value).toLowerCase() === 'test') {
          resolve({
            'projectNameNotValid': true
          });
        } else {
          resolve(null);
        }
      }, 2000)
    });
    return promise;
  }
}
