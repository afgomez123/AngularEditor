import { PrimeNGComponent } from './prime-ng/prime-ng.component';
import { NgModule } from '@angular/core';
import { SafeHtmlPipePipe } from './safe-html-pipe.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { EditorModule } from 'primeng/editor';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, SafeHtmlPipePipe, PrimeNGComponent],
  imports: [BrowserModule, EditorModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
