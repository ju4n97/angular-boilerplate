import { Injectable, OnDestroy } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { filter, map, takeUntil } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class SeoService implements OnDestroy {
  destroy$ = new Subject();

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    private metaService: Meta,
  ) {}

  init(): void {
    const appTitle = this.titleService.getTitle();

    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => this.getLatestChild().snapshot.data || {}),
        takeUntil(this.destroy$),
      )
      .subscribe(({ title, description, robots }) => {
        this.setTitle(appTitle, title);
        this.setDescription(description);
        this.setRobots(robots);
      });
  }

  private getLatestChild(): ActivatedRoute {
    let child = this.activatedRoute.firstChild as ActivatedRoute;

    while (child.firstChild) {
      child = child.firstChild;
    }

    return child;
  }

  private setTitle(rootTitle: string, title: string): void {
    if (title) {
      this.titleService.setTitle(`${rootTitle} - ${title}`);
    }
  }

  private setDescription(description: string): void {
    if (description) {
      this.metaService.updateTag({
        name: 'description',
        content: description,
      });
    }
  }

  private setRobots(robots: string): void {
    if (robots) {
      this.metaService.updateTag({
        name: 'robots',
        content: robots,
      });
    }
  }

  ngOnDestroy(): void {
    this.destroy$.complete();
    this.destroy$.unsubscribe();
  }
}
