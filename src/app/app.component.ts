import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  constructor(private alertCtrl: AlertController) {}

  async onStart() {
    const alert = await this.alertCtrl.create({
      header: 'Bonjour sur SIT E‑Learning',
      message: "Apprenez n'importe où, n'importe quand.",
      buttons: [{ text: 'Continuer', role: 'confirm' }],
      cssClass: 'welcome-alert',
      backdropDismiss: true,
    });
    await alert.present();
  }
}
