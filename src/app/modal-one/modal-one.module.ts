import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { ModalOneComponent } from './modal-one.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule],
  declarations: [ModalOneComponent],
  entryComponents: [ModalOneComponent],
  exports: [ModalOneComponent]
})
export class ModalOneComponentModule {}
