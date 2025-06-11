import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BudgetDetailsComponent } from './pages/budget-details/budget-details.component';
import { CreateAccountComponent } from './pages/create-account/create-account.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard]  },
  { path: 'details/:id', component: BudgetDetailsComponent , canActivate: [AuthGuard]  },
  { path: 'create-account', component: CreateAccountComponent }
];
