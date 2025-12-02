import { Component } from '@angular/core';
import { Popup } from '../popup/popup'

@Component({
  selector: 'app-footer',
  imports: [Popup],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  showPopup = false; // Solo necesitamos esta variable

  openPopup() {
    this.showPopup = true;
  }
}
