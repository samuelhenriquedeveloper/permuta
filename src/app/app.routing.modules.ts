import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';

const appRoutes: Routes = [
    { path: 'cadastro', 
        loadChildren: 'app/cadastro/cadastro.module#CadastroModule',
    },
    { path: 'pesquisa', 
    loadChildren: 'app/pesquisa/pesquisa.module#PesquisaModule',
    },    
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent  },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: PaginaNaoEncontradaComponent } //, canActivate: [AuthGuard]}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, {useHash: false})],
    exports: [RouterModule]
})
export class AppRoutingModule {}