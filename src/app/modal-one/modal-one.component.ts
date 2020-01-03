import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-one',
  templateUrl: './modal-one.component.html',
  styleUrls: ['./modal-one.component.scss']
})
export class ModalOneComponent implements OnInit {
  items: Array<string>;

  constructor(private modalController: ModalController) {}

  ngOnInit() {
    this.items = ['This is the base text'];
  }

  showMore() {
    this.items.push('This is more text');
  }

  showLess() {
    if (this.items.length > 1) {
      this.items.pop();
    }
  }

  close() {
    this.modalController.dismiss();
  }
}
