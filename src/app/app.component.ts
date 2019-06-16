import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  `,
})
export class AppComponent {
  title = 'component render modules';
}

@NgModule({
  declarations: [
    AppComponent,
  ],
})
export class AppRenderModule {}
