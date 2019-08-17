import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { StoreModule } from '@ngrx/store';
import * as fromPodcasts from './state/podcasts.reducer';
import { EffectsModule } from '@ngrx/effects';
import { PodcastsEffects } from './state/podcasts.effects';



@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('podcasts', fromPodcasts.reducer),
    EffectsModule.forFeature([PodcastsEffects])
  ]
})
export class PodcastsModule { }
