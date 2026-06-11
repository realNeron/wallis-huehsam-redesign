import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { QuicklinksComponent } from '../quicklinks/quicklinks';

interface Office {
  id: string;
  name: string;
  title: string;
  street: string;
  city: string;
  phone: string;
  fax: string;
  email: string;
  person?: string;
  link?: string;
  linkText?: string;
  top: number;
  left: number;
}

@Component({
  selector: 'app-in-der-naehe',
  imports: [RouterLink, QuicklinksComponent],
  templateUrl: './in-der-naehe.html',
  styleUrl: './in-der-naehe.css'
})
export class InDerNaeheComponent {
  offices: Office[] = [
    {
      id: 'hersbruck',
      name: 'Büro Hersbruck (Hauptsitz)',
      title: 'Wallis & Hühsam GmbH & Co. KG',
      street: 'Nürnberger Str. 5',
      city: '91217 Hersbruck',
      phone: '09151 - 908 48-0',
      fax: '09151 - 908 48-15',
      email: 'info@wallis-huehsam.de',
      person: 'Bastian Pecher (Geschäftsführer)',
      top: 72,
      left: 64
    },
    {
      id: 'prichsenstadt',
      name: 'Büro Prichsenstadt',
      title: 'Standort Unterfranken',
      street: 'Pfad 9 (Büroadresse)',
      city: '97357 Prichsenstadt',
      phone: '09382 - 90670',
      fax: '09151 - 9084815',
      email: 'helmut.huehsam@wallis-huehsam.de',
      person: 'Helmut Hühsam (Geschäftsführer)',
      top: 69,
      left: 55
    },
    {
      id: 'wismar',
      name: 'Partnerbüro MRVV Wismar',
      title: 'MRVV GmbH & Co. KG',
      street: 'Rothentor 8',
      city: '23966 Wismar',
      phone: '03841 - 223 90',
      fax: '03841 - 223 929',
      email: 'wismar@mrvv.de',
      link: 'https://www.mrvv.de/in-ihrer-naehe/mrvv-wismar',
      linkText: 'Zur Website von MRVV Wismar',
      top: 20,
      left: 56
    }
  ];

  selectedOffice = signal<Office>(this.offices[0]);

  selectOffice(id: string) {
    const found = this.offices.find(o => o.id === id);
    if (found) {
      this.selectedOffice.set(found);
    }
  }
}
