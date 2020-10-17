import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class SeoService {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    private metaTagService: Meta
  ) {}

  init(): void {
    const appTitle = this.titleService.getTitle();

    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => {
          let child = this.activatedRoute.firstChild;

          // Loops until finds the last child.
          while (child.firstChild) {
            child = child.firstChild;
          }

          // Returns values if the route has data object.
          if (Object.keys(child.snapshot.data).length > 0) {
            const { title, description, robots } = child.snapshot.data;
            return [title, description, robots];
          }

          return [null, null, null];
        })
      )
      .subscribe((data) => {
        // Set title and meta tag description.
        const title = data[0];
        const description = data[1];
        const robots = data[2];

        if (title) {
          this.titleService.setTitle(`${appTitle} - ${title}`);
        }

        if (description) {
          this.metaTagService.updateTag({
            name: 'description',
            content: description,
          });
        }

        if (robots) {
          this.metaTagService.updateTag({
            name: 'robots',
            content: robots,
          });
        }
      });
  }
}
