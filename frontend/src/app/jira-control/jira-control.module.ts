import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgIconComponent } from './svg-icon/svg-icon.component';
import { SvgDefinitionsComponent } from './svg-definitions/svg-definitions.component';

@NgModule({
  declarations: [SvgIconComponent, SvgDefinitionsComponent],
  exports: [SvgIconComponent, SvgDefinitionsComponent],
  imports: [CommonModule]
})
export class JiraControlModule {}
