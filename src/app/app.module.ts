import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import bootstrap from 'bootstrap';

import { AppComponent } from './app.component';
import { PalindromeComponent } from './components/palindrome/palindrome.component';

@NgModule({
  declarations: [AppComponent, PalindromeComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
