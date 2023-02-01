import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EstudianteComponent } from './estudiante/estudiante.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes,RouterModule } from '@angular/router';
import { FormSeriosComponent } from './estudiante/form-serios.component';
const routes:Routes=[
{path:'',redirectTo:'/serios',pathMatch:'full'},
{path:'serios',component:EstudianteComponent},
{path:'serios/form',component:FormSeriosComponent},


]
@NgModule({
  declarations: [
    AppComponent,
    EstudianteComponent,
    FormSeriosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
