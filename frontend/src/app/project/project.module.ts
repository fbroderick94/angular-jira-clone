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
import { NZ_JIRA_ICONS } from './config/icons';



@NgModule({
  declarations: [ProjectComponent, NavbarLeftComponent, NavigationComponent, SidebarComponent, ResizerComponent],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    NzToolTipModule,
    NzIconModule.forChild(NZ_JIRA_ICONS)
  ]
})
export class ProjectModule { }
