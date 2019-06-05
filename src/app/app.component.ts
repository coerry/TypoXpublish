import { Component } from '@angular/core';
import { ToasterService } from 'angular2-toaster';
import { Store } from '@ngxs/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TypoX';

  constructor(store:Store, toaster: ToasterService) {
    
  }
}
