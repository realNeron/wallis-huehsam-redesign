import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

interface ClaimForm {
  artDesSchadens: string;
  mitgliedsnummer: string;
  vorname: string;
  nachname: string;
  strasse: string;
  plzOrt: string;
  telefon: string;
  email: string;
  versicherungsnummer: string;
  schadennummer: string;
  
  entschaedigungVorname: string;
  entschaedigungNachname: string;
  bankName: string;
  iban: string;
  bic: string;
  
  wannEingetreten: string;
  wannBemerkt: string;
  woEreignet: string;
  wohnungstyp: string;
  bereitsGemeldet: string;
  dritteSchuld: string;
  obhutSachenBeschädigt: string;
  obhutEigentuemer: string;
  gemeinschaft: string;
  polizeiAnzeige: string;
  polizeiDatum: string;
  polizeiDienststelle: string;
  
  wertgegenstaendeGestohlen: string;
  besondersVersichert: string;
  einbruchspuren: string;
  diebeWeg: string;
  sicherungenGeaendert: string;
  
  beschreibung: string;
  bestaetigt: boolean;
  datenschutzAkzeptiert: boolean;
  ortDatum: string;
}

@Component({
  selector: 'app-schaden-melden',
  imports: [FormsModule, RouterLink],
  templateUrl: './schaden-melden.html',
  styleUrl: './schaden-melden.css'
})
export class SchadenMeldenComponent {
  currentStep = signal(1);
  isSubmitted = signal(false);

  formData: ClaimForm = {
    artDesSchadens: '',
    mitgliedsnummer: '',
    vorname: '',
    nachname: '',
    strasse: '',
    plzOrt: '',
    telefon: '',
    email: '',
    versicherungsnummer: '',
    schadennummer: '',
    
    entschaedigungVorname: '',
    entschaedigungNachname: '',
    bankName: '',
    iban: '',
    bic: '',
    
    wannEingetreten: '',
    wannBemerkt: '',
    woEreignet: '',
    wohnungstyp: 'Bitte wählen',
    bereitsGemeldet: 'Bitte wählen',
    dritteSchuld: 'Bitte wählen',
    obhutSachenBeschädigt: 'Bitte wählen',
    obhutEigentuemer: '',
    gemeinschaft: 'Bitte wählen',
    polizeiAnzeige: 'Bitte wählen',
    polizeiDatum: '',
    polizeiDienststelle: '',
    
    wertgegenstaendeGestohlen: '',
    besondersVersichert: '',
    einbruchspuren: '',
    diebeWeg: '',
    sicherungenGeaendert: '',
    
    beschreibung: '',
    bestaetigt: false,
    datenschutzAkzeptiert: false,
    ortDatum: ''
  };

  nextStep() {
    if (this.currentStep() < 5) {
      this.currentStep.update(s => s + 1);
      this.scrollToTop();
    }
  }

  prevStep() {
    if (this.currentStep() > 1) {
      this.currentStep.update(s => s - 1);
      this.scrollToTop();
    }
  }

  scrollToTop() {
    window.scrollTo({ top: 300, behavior: 'smooth' });
  }

  onSubmit() {
    // Basic validations
    if (!this.formData.vorname || !this.formData.nachname || !this.formData.email || !this.formData.bestaetigt || !this.formData.datenschutzAkzeptiert) {
      alert('Bitte füllen Sie alle Pflichtfelder aus und akzeptieren Sie die Erklärungen.');
      return;
    }
    this.isSubmitted.set(true);
  }

  resetForm() {
    this.isSubmitted.set(false);
    this.currentStep.set(1);
    // Reset fields
    this.formData = {
      artDesSchadens: '',
      mitgliedsnummer: '',
      vorname: '',
      nachname: '',
      strasse: '',
      plzOrt: '',
      telefon: '',
      email: '',
      versicherungsnummer: '',
      schadennummer: '',
      entschaedigungVorname: '',
      entschaedigungNachname: '',
      bankName: '',
      iban: '',
      bic: '',
      wannEingetreten: '',
      wannBemerkt: '',
      woEreignet: '',
      wohnungstyp: 'Bitte wählen',
      bereitsGemeldet: 'Bitte wählen',
      dritteSchuld: 'Bitte wählen',
      obhutSachenBeschädigt: 'Bitte wählen',
      obhutEigentuemer: '',
      gemeinschaft: 'Bitte wählen',
      polizeiAnzeige: 'Bitte wählen',
      polizeiDatum: '',
      polizeiDienststelle: '',
      wertgegenstaendeGestohlen: '',
      besondersVersichert: '',
      einbruchspuren: '',
      diebeWeg: '',
      sicherungenGeaendert: '',
      beschreibung: '',
      bestaetigt: false,
      datenschutzAkzeptiert: false,
      ortDatum: ''
    };
  }
}
