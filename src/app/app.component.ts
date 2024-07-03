import { Component } from '@angular/core';
import { Event, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'wizer';
  route: string = '';
  routes: any[] = [
    { name: 'Comment', path: '/', isActive: false, icon: '' },
    {
      name: 'User',
      path: '/users',
      isActive: false,
      icon: 'fa-regular fa-user',
    },
  ];

  constructor(private router: Router) {
    router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        // Hide loading indicator
        console.log(event);
        this.route = event.url;
        this.routes.forEach((element) => {
          if (element.path === this.route) {
            element.isActive = true;
          } else {
            element.isActive = false;
          }
        });
      }
    });
  }
}
