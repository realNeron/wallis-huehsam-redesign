import { Component, OnInit, OnDestroy, signal, inject } from '@angular/core';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import { QuicklinksComponent } from '../quicklinks/quicklinks';

type ServiceTab = 'was-tun' | 'kfz-schlepper' | 'maschinenbruch';

@Component({
  selector: 'app-service',
  imports: [RouterLink, QuicklinksComponent],
  templateUrl: './service.html',
  styleUrl: './service.css'
})
export class ServiceComponent implements OnInit, OnDestroy {
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private routeSub!: Subscription;

  activeTab = signal<ServiceTab>('was-tun');

  ngOnInit() {
    this.routeSub = this.route.url.subscribe(() => {
      this.updateTabFromUrl();
    });
  }

  ngOnDestroy() {
    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
  }

  updateTabFromUrl() {
    const url = this.router.url;
    if (url.includes('kraftfahrzeuge-und-schlepper')) {
      this.activeTab.set('kfz-schlepper');
    } else if (url.includes('maschinenbruch-und-elektronik')) {
      this.activeTab.set('maschinenbruch');
    } else {
      this.activeTab.set('was-tun');
    }
  }

  switchTab(tab: ServiceTab) {
    this.activeTab.set(tab);
    if (tab === 'kfz-schlepper') {
      this.router.navigate(['/unser-service/konzepte/kraftfahrzeuge-und-schlepper']);
    } else if (tab === 'maschinenbruch') {
      this.router.navigate(['/unser-service/konzepte/maschinenbruch-und-elektronik']);
    } else {
      this.router.navigate(['/unser-service/was-koennen-wir-fuer-sie-tun']);
    }
  }
}
