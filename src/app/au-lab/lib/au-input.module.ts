import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuFaInputComponent } from './au-fa-input/au-fa-input.component';
import { InputRefDirective } from './common/input-ref.directive';
import { AuTabPanelComponent } from './au-tab-panel/au-tab-panel.component';
import { AuTabComponent } from './au-tab/au-tab.component';
import { AuModalComponent } from './au-modal/au-modal.component';
import { AuModalOpenOnClickDirective } from './au-modal/au-modal-open-on-click.directive';
import { AuMaskDirective } from './au-mask/au-mask.directive';



@NgModule({
  declarations: [
    AuFaInputComponent, 
    InputRefDirective, 
    AuTabPanelComponent, 
    AuTabComponent, 
    AuModalComponent, 
    AuModalOpenOnClickDirective, 
    AuMaskDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AuFaInputComponent, 
    InputRefDirective, 
    AuTabPanelComponent, 
    AuTabComponent,
    AuModalComponent,
    AuModalOpenOnClickDirective,
    AuMaskDirective
  ]
})
export class AuInputModule { }
