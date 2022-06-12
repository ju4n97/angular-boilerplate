import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.css'],
})
export class ProfilePage {
  username!: string | null;

  constructor(private _activatedRoute: ActivatedRoute) {
    this.username = this._activatedRoute.snapshot.paramMap.get('username');
  }
}
