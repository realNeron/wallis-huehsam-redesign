import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class HeaderComponent {
  isMenuOpen = signal(false);
  isServiceDropdownOpen = signal(false);
  isRechnerDropdownOpen = signal(false);

  toggleMenu() {
    this.isMenuOpen.update(v => !v);
  }

  closeMenu() {
    this.isMenuOpen.set(false);
    this.isServiceDropdownOpen.set(false);
    this.isRechnerDropdownOpen.set(false);
  }

  toggleServiceDropdown(event: Event) {
    event.stopPropagation();
    this.isServiceDropdownOpen.update(v => !v);
    this.isRechnerDropdownOpen.set(false);
  }

  toggleRechnerDropdown(event: Event) {
    event.stopPropagation();
    this.isRechnerDropdownOpen.update(v => !v);
    this.isServiceDropdownOpen.set(false);
  }
}
