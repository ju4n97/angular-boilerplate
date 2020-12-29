import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { SeoService } from './@core/services/seo';
import { Path } from './@core/structs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isLoggedIn$ = new BehaviorSubject<boolean>(true);

  constructor(private router: Router, private seoService: SeoService) {}

  ngOnInit(): void {
    this.seoService.init();
  }

  onLogout() {
    this.isLoggedIn$.next(false);
    this.router.navigate([`/${Path.SignIn}`]);
  }
}
