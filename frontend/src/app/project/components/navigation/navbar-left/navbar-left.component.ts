import { Component, OnInit } from '@angular/core';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { NzModalService } from 'ng-zorro-antd/modal';
@Component({
  selector: 'app-navbar-left',
  templateUrl: './navbar-left.component.html',
  styleUrls: ['./navbar-left.component.scss']
})
export class NavbarLeftComponent implements OnInit {
  items: NavItem[] = [];

  constructor(private _drawerService: NzDrawerService, private _modalService: NzModalService) {}

  ngOnInit(): void {
    this.items = [
      new NavItem('search', 'Search', this.openSearchDrawer.bind(this)),
      new NavItem('plus', 'Create issue', this.openCreateIssueModal.bind(this))
    ];
  }

  openCreateIssueModal() {
    this._modalService.create({
      nzContent: '<div>Hello</div>',
      nzClosable: false,
      nzFooter: null,
      nzWidth: 700
    });
  }

  openSearchDrawer() {
    this._drawerService.create({
      nzTitle: 'Hello',
      nzPlacement: 'left',
      nzClosable: false,
      nzWidth: 500
    });
  }
}

class NavItem {
  constructor(public icon: string, public tooltip: string, public handler: Handler) {}
}

type Handler = () => void;
