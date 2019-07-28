import { NgModule, ModuleWithProviders } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import * as mat from '@angular/material';

import { ElectronService } from './electron/electron.service';
import { WebviewDirective } from './electron/webview.directive';

@NgModule({
  declarations: [
    WebviewDirective
  ],
  exports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    WebviewDirective,
    BrowserAnimationsModule,
    mat.MatIconModule,
    mat.MatButtonModule,
    mat.MatProgressBarModule,
    mat.MatInputModule,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    mat.MatIconModule,
    mat.MatButtonModule,
    mat.MatProgressBarModule,
    mat.MatInputModule,
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
