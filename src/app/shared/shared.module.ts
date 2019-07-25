import { NgModule, ModuleWithProviders } from '@angular/core';
import { MatSidenavModule } from '@angular/material';

import { ElectronService } from './electron/electron.service';
import { WebviewDirective } from './electron/webview.directive';

@NgModule({
  declarations: [
    WebviewDirective
  ],
  exports: [
    WebviewDirective,
    MatSidenavModule
  ],
  imports: [
    MatSidenavModule
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        ElectronService
      ]
    };
  }
}
