import 'reflect-metadata';
import '../polyfills';
import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { PodcastsModule } from './podcasts/podcasts.module';
import { MainComponent, SideNavComponent, PlayerComponent } from './components';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SideNavComponent,
    PlayerComponent,
  ],
  imports: [
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (HttpLoaderFactory),
        deps: [HttpClient]
      }
    }),
    SharedModule.forRoot(),
    PodcastsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
