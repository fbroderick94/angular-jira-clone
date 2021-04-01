import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarLeftComponent } from './components/navigation/navbar-left/navbar-left.component';
import { NavigationComponent } from './components/navigation/navigation/navigation.component';
import { SidebarComponent } from './components/navigation/sidebar/sidebar.component';
import { ResizerComponent } from './components/navigation/resizer/resizer.component';
import { ProjectComponent } from './project.component';
import { ProjectRoutingModule } from './project-routing.module';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NZ_JIRA_ICONS } from './config/icons';
import { JiraControlModule } from '../jira-control/jira-control.module';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzModalModule } from 'ng-zorro-antd/modal';

@NgModule({
  declarations: [
    ProjectComponent,
    NavbarLeftComponent,
    NavigationComponent,
    SidebarComponent,
    ResizerComponent
  ],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    NzToolTipModule,
    NzIconModule.forChild(NZ_JIRA_ICONS),
    JiraControlModule,
    NzPopoverModule,
    NzDrawerModule,
    NzModalModule
  ]
})
export class ProjectModule {}
