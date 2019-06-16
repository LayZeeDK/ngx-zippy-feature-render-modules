import { Component, NgModule } from '@angular/core';

import { CapitalizePipe } from './capitalize.pipe';
import { ZippyComponent } from './zippy.component';

@Component({
  selector: 'app-root',
  template: `
    <app-zippy label="Click me">
      {{title | capitalize}}
    </app-zippy>
  `,
})
export class AppComponent {
  title = 'component render modules';
}

@NgModule({
  declarations: [
    AppComponent,
    CapitalizePipe,
    ZippyComponent,
  ],
})
class AppRenderModule {}
