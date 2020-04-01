import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DateCountPipe } from './date-count.pipe';
import { QouteComponent } from './qoute/qoute.component';
import { QouteDetailComponent } from './qoute-detail/qoute-detail.component';
import { QouteFormComponent } from './qoute-form/qoute-form.component';
import { VoteComponent } from './vote/vote.component';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    DateCountPipe,
    QouteComponent,
    QouteDetailComponent,
    QouteFormComponent,
    VoteComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
