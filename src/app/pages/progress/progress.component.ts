import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent {

  progress: number = 50;
  constructor() { }

  get getProgress(): string {
    return `${this.progress}%`;
  }

  changeValue(value: number) {
    if (this.progress === 0 && value < 0) {
      this.progress = 0;
      return;
    }
    if (this.progress === 100 && value > 0) {
      this.progress = 100;
      return;
    }
    this.progress += value;
  }
}
