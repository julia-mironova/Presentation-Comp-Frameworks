import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  writeNum: number = 0;
  plusBtn() {
    this.writeNum++;
  }
  minusBtn() {
    this.writeNum--;
  }

  constructor() { }

  ngOnInit(): void {
  }
}
