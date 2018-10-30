import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.html',
  styles: []
})
export class DisplayComponent {

  amount = 100;
  myname = 'Farmer Portal';
  today: number = Date.now();
  b: number = 1.3495;
}

