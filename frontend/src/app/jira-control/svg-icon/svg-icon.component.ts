import { Component, Input, OnInit } from '@angular/core';
import { ConsoleSqlOutline } from '@ant-design/icons-angular/icons';

@Component({
  selector: 'svg-icon',
  templateUrl: './svg-icon.component.html'
})
export class SvgIconComponent implements OnInit {
  @Input() name: string;
  @Input() size = 16;
  @Input() fill = 'currentColor';
  window: any = window;
  constructor() {}

  ngOnInit(): void {}

  ngOnChanges() {}

  get iconUrl() {
    return `${this.window.location.href}#${this.name}`;
  }
}
