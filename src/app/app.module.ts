import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WebShellModule } from '@shell/ft/web-shell.module';
import { CoreModule } from './@core/core.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CoreModule, WebShellModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
