import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {
  title = 'host';

  lastAppElement: HTMLElement | null = null;

  showApp(app: string | null) {
    if (this.lastAppElement) {
      document.body.removeChild(this.lastAppElement);
    }
    this.lastAppElement = null;
    if (app) {
      const appElement = document.createElement(app);
      document.body.appendChild(appElement);
      this.lastAppElement = appElement;
    }
  }
}
