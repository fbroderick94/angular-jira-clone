import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-left',
  templateUrl: './navbar-left.component.html',
  styleUrls: ['./navbar-left.component.scss']
})
export class NavbarLeftComponent implements OnInit {
  items: NavItem[] = [];

  constructor() {}

  ngOnInit(): void {
    this.items = [
      new NavItem('search', 'Search', this.openSearchDrawer.bind(this)),
      new NavItem('plus', 'Create issue', this.openCreateIssueModal.bind(this))
    ];
  }

  openCreateIssueModal() {
    console.log('OPening modal');
  }

  openSearchDrawer() {
    console.log('OPening search Drawer');
  }
}

class NavItem {
  constructor(public icon: string, public tooltip: string, public handler: Handler) {}
}

type Handler = () => void;
