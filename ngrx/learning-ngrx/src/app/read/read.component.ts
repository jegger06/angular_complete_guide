import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Tutorial } from './../models/tutorial.model';
import { AppState } from './../app.state';
import * as TutorialActions from './../actions/tutorial.actions';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  tutorials: Observable<Array<Tutorial>>;

  constructor(private store: Store<AppState>) {
    this.tutorials = store.select('tutorial');
    console.log('from read component:', this.tutorials);
  }

  ngOnInit() {
  }

  del(index: number) {
    this.store.dispatch(new TutorialActions.RemoveTutorial(index))
  }


}
