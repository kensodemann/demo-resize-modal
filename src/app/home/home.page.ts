import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalOneComponent } from '../modal-one/modal-one.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  constructor(private modalController: ModalController) {}

  async openModalOne() {
    const m = await this.modalController.create({
      component: ModalOneComponent,
      cssClass: 'auto-height'
    });
    m.present();
  }
}
