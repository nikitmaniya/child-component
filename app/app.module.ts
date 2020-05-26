import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {NikitService} from './nikit.service';
import { EditorComponent } from './pages/editor/editor.component';
import { ChildComponentComponent } from './child-component/child-component.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EditorComponent,
    ChildComponentComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [NikitService],
  bootstrap: [AppComponent,]
})
export class AppModule { }
