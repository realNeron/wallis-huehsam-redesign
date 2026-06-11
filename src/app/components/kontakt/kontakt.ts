import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { QuicklinksComponent } from '../quicklinks/quicklinks';

interface ContactForm {
  anrede: string;
  name: string;
  strasse: string;
  plzOrt: string;
  mitteilung: string;
  rueckrufGewuenscht: string;
  telefonnummer: string;
  terminGewuenscht: string;
  wunschtermin: string;
  email: string;
  datenschutzAkzeptiert: boolean;
}

@Component({
  selector: 'app-kontakt',
  imports: [FormsModule, RouterLink, QuicklinksComponent],
  templateUrl: './kontakt.html',
  styleUrl: './kontakt.css'
})
export class KontaktComponent {
  isSubmitted = signal(false);

  formData: ContactForm = {
    anrede: 'Bitte auswählen ...',
    name: '',
    strasse: '',
    plzOrt: '',
    mitteilung: '',
    rueckrufGewuenscht: 'Nein',
    telefonnummer: '',
    terminGewuenscht: 'Nein',
    wunschtermin: '',
    email: '',
    datenschutzAkzeptiert: false
  };

  onSubmit() {
    if (!this.formData.name || !this.formData.email || !this.formData.datenschutzAkzeptiert) {
      alert('Bitte füllen Sie alle Pflichtfelder aus und akzeptieren Sie die Datenschutzerklärung.');
      return;
    }
    this.isSubmitted.set(true);
  }

  resetForm() {
    this.isSubmitted.set(false);
    this.formData = {
      anrede: 'Bitte auswählen ...',
      name: '',
      strasse: '',
      plzOrt: '',
      mitteilung: '',
      rueckrufGewuenscht: 'Nein',
      telefonnummer: '',
      terminGewuenscht: 'Nein',
      wunschtermin: '',
      email: '',
      datenschutzAkzeptiert: false
    };
  }
}
