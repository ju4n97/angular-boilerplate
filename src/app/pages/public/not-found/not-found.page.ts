import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Path } from '@app/@core/structs';

@Component({
  templateUrl: './not-found.page.html',
  styleUrls: ['./not-found.page.scss'],
})
export class NotFoundPage implements OnInit {
  path = Path;

  constructor(private location: Location) {}

  ngOnInit(): void {}

  onClickGoBack(): void {
    this.location.back();
  }
}
