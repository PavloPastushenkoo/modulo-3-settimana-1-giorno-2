import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponentDueComponent } from './components/component-due/component-due.component';
import { ComponentTreComponent } from './components/component-tre/component-tre.component';
import { ComponentQuartoComponent } from './components/component-quarto/component-quarto.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentDueComponent,
    ComponentTreComponent,
    ComponentQuartoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
