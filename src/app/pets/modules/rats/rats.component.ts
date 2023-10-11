import {Component, OnDestroy, OnInit} from '@angular/core';
import {interval, Subscription, timer} from "rxjs";

@Component({
  selector: 'app-rats',
  templateUrl: './rats.component.html',
  styleUrls: ['./rats.component.scss']
})
export class RatsComponent implements OnInit, OnDestroy{
subscriptions: Subscription[] = [];
squeal$ = interval(1000)
  ngOnInit() {
  this.subscriptions.push(this.squeal$.subscribe(number => console.log(`${number}. squeal.`)))
  }
  ngOnDestroy() {
  this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
