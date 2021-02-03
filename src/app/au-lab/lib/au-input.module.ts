import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuFaInputComponent } from './au-fa-input/au-fa-input.component';
import { InputRefDirective } from './common/input-ref.directive';
import { AuTabPanelComponent } from './au-tab-panel/au-tab-panel.component';
import { AuTabComponent } from './au-tab/au-tab.component';



@NgModule({
  declarations: [AuFaInputComponent, InputRefDirective, AuTabPanelComponent, AuTabComponent],
  imports: [
    CommonModule
  ],
  exports: [AuFaInputComponent, InputRefDirective, AuTabPanelComponent, AuTabComponent]
})
export class AuInputModule { }
