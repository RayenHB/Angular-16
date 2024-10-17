import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet, RouterModule, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { CommonModule } from '@angular/common';
import { isPlatformBrowser } from '@angular/common'; // Import this to check for browser

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MyRockets';
  constructor(
    public authService: AuthService,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: any // Inject PLATFORM_ID to check platform
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      // Only run this block if in the browser
      let isloggedin: string | null;
      let loggedUser: string | null;
      isloggedin = localStorage.getItem('isloggedIn');
      loggedUser = localStorage.getItem('loggedUser');
      if (isloggedin !== 'true' || !loggedUser) {
        this.router.navigate(['/login']);
      } else {
        this.authService.setLoggedUserFromLocalStorage(loggedUser);
      }
    }
  }
}
