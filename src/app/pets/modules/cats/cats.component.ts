import {Component, OnDestroy, OnInit} from '@angular/core';
import {interval, Subscription, timer} from "rxjs";

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.scss']
})
export class CatsComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  meow$ = interval(1000)
  ngOnInit() {
    this.subscriptions.push(this.meow$.subscribe(number => console.log(`${number}. meow meow.`)))
  }
  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

}
