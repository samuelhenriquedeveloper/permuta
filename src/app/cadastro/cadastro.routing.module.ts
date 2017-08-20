import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarComponent } from './editar/editar.component';
import { CadastroComponent } from './cadastro.component';

const cadastroRoutes: Routes = [
    { path: '', component: CadastroComponent },
    { path: 'editar', component: EditarComponent }
];

@NgModule({
    imports: [RouterModule.forChild(cadastroRoutes)],
    exports: [RouterModule]
})
export class CadastroRoutingModule {}