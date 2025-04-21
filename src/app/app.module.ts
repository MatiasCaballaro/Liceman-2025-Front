import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; // Import AppComponent

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AppComponent // Import AppComponent directly as it's standalone
  ],
  providers: [],
  bootstrap: [AppComponent] // Use AppComponent for bootstrap
})
export class AppModule { }
