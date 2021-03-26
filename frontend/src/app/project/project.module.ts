import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarLeftComponent } from './components/navigation/navbar-left/navbar-left.component';
import { NavigationComponent } from './components/navigation/navigation/navigation.component';
import { SidebarComponent } from './components/navigation/sidebar/sidebar.component';
import { ResizerComponent } from './components/navigation/resizer/resizer.component';
import { ProjectComponent } from './project.component';
import { ProjectRoutingModule } from './project-routing.module';



@NgModule({
  declarations: [ProjectComponent, NavbarLeftComponent, NavigationComponent, SidebarComponent, ResizerComponent],
  imports: [
    CommonModule,
    ProjectRoutingModule
  ]
})
export class ProjectModule { }
