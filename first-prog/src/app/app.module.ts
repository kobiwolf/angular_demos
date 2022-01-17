import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { MatModule } from '../modules/mat.module'
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { ContentTopComponent } from './content/content-top/content-top.component';
import { ContentBottomComponent } from './content/content-bottom/content-bottom.component';
import { PipesComponent } from './content/pipes/pipes.component';
import { ReversePipe } from './content/pipes/reverse.pipe';
import { InfoComponent } from './info/info.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    ContentTopComponent,
    ContentBottomComponent,
    PipesComponent,
    ReversePipe,
    InfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
