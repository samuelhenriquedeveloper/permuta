import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastroRoutingModule } from './cadastro.routing.module';
import { CadastroService } from './cadastro.service';
import { EditarComponent } from './editar/editar.component';
import { CadastroComponent } from './cadastro.component';

@NgModule({
    imports: [
        CommonModule,
        CadastroRoutingModule
    ],
    exports: [],
    declarations: [
        CadastroComponent,
        EditarComponent
    ],
    providers: [CadastroService],
})
export class CursosModule { }