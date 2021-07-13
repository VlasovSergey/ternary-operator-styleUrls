import { Component } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [environment.production ? './app.component.prod.css' : './app.component.css']
})
export class AppComponent {
  title = 'ternary-operator-styleUrls';
}
