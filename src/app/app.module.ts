import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { GoalComponent } from './goal/goal.component';
import { GoalDetailComponent } from './goal-detail/goal-detail.component';
import { StrikethroughDirective } from './strikethrough.directive';
import { GoalFormComponent } from './goal-form/goal-form.component';
import { FormsModule } from '@angular/forms';
import { DateCountPipe } from './date-count.pipe';

@NgModule({
  declarations: [
    AppComponent,
    GoalComponent,
    GoalDetailComponent,
    StrikethroughDirective,
    DateCountPipe,
    GoalFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA],

  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
