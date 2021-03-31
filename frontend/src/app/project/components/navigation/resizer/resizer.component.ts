import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-resizer',
  templateUrl: './resizer.component.html',
  styleUrls: ['./resizer.component.scss']
})
export class ResizerComponent implements OnInit {
  @Input() expanded: boolean;

  constructor() {}

  get icon() {
    return this.expanded ? 'chevron-left' : 'chevron-right';
  }

  ngOnInit(): void {}
}
