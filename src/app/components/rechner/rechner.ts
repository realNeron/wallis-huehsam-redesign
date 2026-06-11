import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { QuicklinksComponent } from '../quicklinks/quicklinks';

@Component({
  selector: 'app-rechner',
  imports: [RouterLink, QuicklinksComponent],
  templateUrl: './rechner.html',
  styleUrl: './rechner.css'
})
export class RechnerComponent {}
