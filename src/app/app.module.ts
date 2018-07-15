import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AddmemberComponent } from './addmember/addmember.component';
import { DisplaymemberComponent } from './displaymember/displaymember.component';
import { DeletememberComponent } from './deletemember/deletemember.component';
import { EditmemberComponent } from './editmember/editmember.component';


const appRoutes: Routes = [
  { path: 'add', component: AddmemberComponent },
  { path: 'display', component: DisplaymemberComponent },
  { path: 'display/:name', component: DisplaymemberComponent },
  { path: 'edit/:name', component: EditmemberComponent },
  { path: 'delete/:name', component: DeletememberComponent },
  { path: '', redirectTo: '/display', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    AddmemberComponent,
    DisplaymemberComponent,
    DeletememberComponent,
    EditmemberComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
