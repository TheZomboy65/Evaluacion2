import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent  implements OnInit {
  isModalOpen = false;
  constructor(private toastController: ToastController) {}
  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }


  async presentToast(position:'bottom') {
    const toast = await this.toastController.create({
      message: 'Informe enviado correctamente',
      duration: 1500,
      position: position,
    });

    await toast.present();
  }


  ngOnInit() {}

}
