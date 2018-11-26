import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MainComponent } from './main/main.component';
import { AddEditComponent } from './add-edit/add-edit.component';
import { ProfileComponent } from './profile/profile.component';
import { NotExistingComponent } from './not-existing/not-existing.component';
import { ItemListComponent } from './item-list/item-list.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'main',component:MainComponent,
    children:[
      {path:'',redirectTo:'list',pathMatch:'full'},
      {path:'list',component:ItemListComponent},
      {path:'addedit',component:AddEditComponent},
      {path:'profile',component:ProfileComponent},
      {path:'**',component:NotExistingComponent}
      ]
    },
    {path:'**',component:NotExistingComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MainComponent,
    AddEditComponent,
    ProfileComponent,
    NotExistingComponent,
    ItemListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
