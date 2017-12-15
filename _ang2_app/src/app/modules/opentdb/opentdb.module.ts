import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Http, HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';

import { QuestionsComponent } from './views/questions/questions.component';
import { CategoriesComponent } from './views/categories/categories.component';
import { CategoryPopupComponent } from './views/categories/category-popup/category-popup.component';
import { OpenTDBService } from './opentdb.service';
import { ScoreboardComponent } from './views/Scoreboard/scoreboard.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { AuthGuard } from '../../guards/auth.guard';


const routes: Routes = [
  {path: '', redirectTo: 'categories'},
  {path: 'categories', component: CategoriesComponent},
  {path: 'questions', component: QuestionsComponent, canActivate: [AuthGuard]},
  {path: 'scoreboard', component: ScoreboardComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
];

export function openTDBfactory(http: Http) {
  return new OpenTDBService(http, 'https://opentdb.com/');
}

@NgModule({
  declarations: [
    CategoriesComponent,
    QuestionsComponent,
    CategoryPopupComponent,
    ScoreboardComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    BootstrapModalModule,
    RouterModule.forChild(routes)
  ],
  entryComponents: [CategoryPopupComponent],
  providers: [{provide: OpenTDBService, useFactory: openTDBfactory, deps: [Http]}],
  exports: [RouterModule]
})
export class OpenTDBModule { }
