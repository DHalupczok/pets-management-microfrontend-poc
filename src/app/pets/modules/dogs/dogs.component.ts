import {Component, OnDestroy, OnInit} from '@angular/core';
import {interval, Subscription, timer} from "rxjs";

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.scss']
})
export class DogsComponent implements OnInit, OnDestroy{
  subscriptions: Subscription[] = [];
  bark$ = interval(1000)
  ngOnInit() {
    this.subscriptions.push(this.bark$.subscribe(number => console.log(`${number}. Wof Wof.`)))
  }
  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
