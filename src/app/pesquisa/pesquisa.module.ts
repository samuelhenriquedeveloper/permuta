import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PesquisaRoutingModule } from './pesquisa.routing.module';
import { PesquisaService } from './pesquisa.service';
import { PesquisaComponent } from './pesquisa.component';

@NgModule({
    imports: [
        CommonModule,
        PesquisaRoutingModule
    ],
    exports: [],
    declarations: [
        PesquisaComponent
    ],
    providers: [PesquisaService],
})
export class PesquisaModule { }