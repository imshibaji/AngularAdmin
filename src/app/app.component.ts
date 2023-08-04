import { Component } from '@angular/core';
import { TemplateComponent } from './components/template/template.component';
import { FormControl } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
  <app-template>
    <router-outlet></router-outlet>
  </app-template>
  `,
  styles: ['']
})
export class AppComponent {

}
