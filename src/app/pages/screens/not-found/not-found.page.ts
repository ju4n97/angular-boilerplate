import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './not-found.page.html',
  styleUrls: ['./not-found.page.css'],
})
export class NotFoundPage {}
