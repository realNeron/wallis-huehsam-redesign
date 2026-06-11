import { Component } from '@angular/core';
import { QuicklinksComponent } from '../quicklinks/quicklinks';

interface TeamMember {
  name: string;
  role: string;
  email: string;
  gender: 'm' | 'w';
}

@Component({
  selector: 'app-ueber-uns',
  imports: [QuicklinksComponent],
  templateUrl: './ueber-uns.html',
  styleUrl: './ueber-uns.css'
})
export class UeberUnsComponent {
  management: TeamMember[] = [
    {
      name: 'Helmut Hühsam',
      role: 'Geschäftsführer',
      email: 'helmut.huehsam@wallis-huehsam.de',
      gender: 'm'
    },
    {
      name: 'Bastian Pecher',
      role: 'Geschäftsführer',
      email: 'bastian.pecher@wallis-huehsam.de',
      gender: 'm'
    }
  ];

  staff: TeamMember[] = [
    {
      name: 'Michael Hartwig-Langner',
      role: 'Kundenberatung & Service',
      email: 'michael.hartwig-langner@wallis-huehsam.de',
      gender: 'm'
    },
    {
      name: 'Stefanie Rauscher',
      role: 'Kundenberatung & Service',
      email: 'stefanie.rauscher@wallis-huehsam.de',
      gender: 'w'
    },
    {
      name: 'Birgitt Gramsch',
      role: 'Kundenberatung & Service',
      email: 'birgitt.gramsch@wallis-huehsam.de',
      gender: 'w'
    },
    {
      name: 'Sandra Rogner',
      role: 'Kundenberatung & Service',
      email: 'sandra.rogner@wallis-huehsam.de',
      gender: 'w'
    },
    {
      name: 'Martina Peterson',
      role: 'Kundenberatung & Service',
      email: 'martina.peterson@wallis-huehsam.de',
      gender: 'w'
    },
    {
      name: 'Doris Herbert',
      role: 'Kundenberatung & Service',
      email: 'doris.herbert@wallis-huehsam.de',
      gender: 'w'
    },
    {
      name: 'Kathrin Hedmann',
      role: 'Kundenberatung & Service',
      email: 'kathrin.hedmann@wallis-huehsam.de',
      gender: 'w'
    },
    {
      name: 'Bianca Müller-Tischner',
      role: 'Kundenberatung & Service',
      email: 'bianca.mueller-tischner@wallis-huehsam.de',
      gender: 'w'
    },
    {
      name: 'Petra Ruppert',
      role: 'Kundenberatung & Service',
      email: 'petra.ruppert@wallis-huehsam.de',
      gender: 'w'
    },
    {
      name: 'Katharina Arent',
      role: 'Kundenberatung & Service',
      email: 'kathi.arent@wallis-huehsam.de',
      gender: 'w'
    }
  ];
}
