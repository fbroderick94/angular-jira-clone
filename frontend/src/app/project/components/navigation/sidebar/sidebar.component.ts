import { Component, Input, OnInit } from '@angular/core';
import { SideBarLinks } from '../../../config/sidebar';
import { SideBarLink } from '../../../interface/ui-model/nav-link';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input() expanded: boolean;
  sideBarLinks: SideBarLink[];

  constructor() {}

  get sidebarWidth(): number {
    return this.expanded ? 240 : 15;
  }

  ngOnInit(): void {
    this.sideBarLinks = SideBarLinks;
  }
}
