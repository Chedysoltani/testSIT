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

  onStart() {
    alert("Bonjour !");  // Très simple, fonctionne même dans QR preview
    console.log("Bouton cliqué"); // Utile si tu testes via Chrome Remote Debug
  }
}
