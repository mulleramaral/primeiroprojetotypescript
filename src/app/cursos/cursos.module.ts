import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursosService } from './cursos.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CursosComponent, CursoDetalheComponent],
  exports: [CursosComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [CursosService]
})
export class CursosModule { }
