import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { ServiceComponent } from './components/service/service';
import { SchadenMeldenComponent } from './components/schaden-melden/schaden-melden';
import { RechnerComponent } from './components/rechner/rechner';
import { InDerNaeheComponent } from './components/in-der-naehe/in-der-naehe';
import { UeberUnsComponent } from './components/ueber-uns/ueber-uns';
import { PartnerComponent } from './components/partner/partner';
import { KontaktComponent } from './components/kontakt/kontakt';
import { ImpressumComponent } from './components/impressum/impressum';
import { DatenschutzComponent } from './components/datenschutz/datenschutz';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  
  // Service Subpaths map to unified ServiceComponent
  { path: 'unser-service', component: ServiceComponent },
  { path: 'unser-service/was-koennen-wir-fuer-sie-tun', component: ServiceComponent },
  { path: 'unser-service/schaden-melden', component: SchadenMeldenComponent },
  { path: 'unser-service/konzepte/kraftfahrzeuge-und-schlepper', component: ServiceComponent },
  { path: 'unser-service/konzepte/maschinenbruch-und-elektronik', component: ServiceComponent },
  
  // Rechner
  { path: 'rechner', component: RechnerComponent },
  { path: 'rechner/auslandskrankenversicherung', component: RechnerComponent },
  { path: 'rechner/reiseversicherung-travelsecure', component: RechnerComponent },
  
  // Locations
  { path: 'in-ihrer-naehe', component: InDerNaeheComponent },
  
  // Management/Staff
  { path: 'ueber-uns', component: UeberUnsComponent },
  
  // Partners
  { path: 'unsere-partner', component: PartnerComponent },
  
  // Form Contact
  { path: 'kontakt', component: KontaktComponent },
  
  // Legals
  { path: 'impressum', component: ImpressumComponent },
  { path: 'datenschutz', component: DatenschutzComponent },
  
  // Fallback
  { path: '**', redirectTo: '' }
];
