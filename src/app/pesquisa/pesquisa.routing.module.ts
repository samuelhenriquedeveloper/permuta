import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PesquisaComponent } from './pesquisa.component';

const pesquisaRoutes: Routes = [
    { path: '', component: PesquisaComponent }
];

@NgModule({
    imports: [RouterModule.forChild(pesquisaRoutes)],
    exports: [RouterModule]
})
export class PesquisaRoutingModule {}