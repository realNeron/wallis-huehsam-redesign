import { Component, signal, OnInit, OnDestroy, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { QuicklinksComponent } from '../quicklinks/quicklinks';

interface Slide {
  image: string;
  title: string;
  subtitle: string;
}

@Component({
  selector: 'app-home',
  imports: [RouterLink, QuicklinksComponent],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent implements OnInit, OnDestroy {
  private platformId = inject(PLATFORM_ID);
  
  slides: Slide[] = [
    {
      image: 'assets/hero_family.png',
      title: 'Schutz für die ganze Familie',
      subtitle: 'Individuelle Absicherung für alles, was Ihnen lieb und teuer ist.'
    },
    {
      image: 'assets/hero_tractor.png',
      title: 'Betriebliche & Landwirtschaftliche Versicherungen',
      subtitle: 'Spezialtarife und Flottenkonzepte für landwirtschaftliche Betriebe.'
    },
    {
      image: 'assets/hero_office.png',
      title: 'Persönliche Betreuung vor Ort',
      subtitle: 'Seit über 20 Jahren Ihr treuhändischer Ansprechpartner in Bayern.'
    }
  ];

  activeSlideIndex = signal(0);
  private slideInterval: any;

  ngOnInit() {
    // Only run interval on the client side
    if (isPlatformBrowser(this.platformId)) {
      this.startSlideShow();
    }
  }

  ngOnDestroy() {
    this.stopSlideShow();
  }

  startSlideShow() {
    this.slideInterval = setInterval(() => {
      this.nextSlide();
    }, 6000);
  }

  stopSlideShow() {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
  }

  nextSlide() {
    this.activeSlideIndex.update(idx => (idx + 1) % this.slides.length);
  }

  prevSlide() {
    this.activeSlideIndex.update(idx => (idx - 1 + this.slides.length) % this.slides.length);
  }

  setSlide(index: number) {
    this.activeSlideIndex.set(index);
    // Reset timer on manual action
    this.stopSlideShow();
    this.startSlideShow();
  }
}
