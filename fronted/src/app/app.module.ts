import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';  // Importa tu AppRoutingModule
import { AppComponent } from './app.component';
import { HomeComponent } from './components/public/home/home.component';
import { FooterComponent } from './components/public/shared/footer/footer.component';
import { HeaderComponent } from './components/public/shared/header/header.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,  // Importa AppRoutingModule
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
