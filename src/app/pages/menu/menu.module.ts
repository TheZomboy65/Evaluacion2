import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuPageRoutingModule } from './menu-routing.module';

import { MenuPage } from './menu.page';
import { MenuContactoComponent } from 'src/app/componentes/menu-contacto/menu-contacto.component';
import { MenuSoporteComponent } from 'src/app/componentes/menu-soporte/menu-soporte.component';
import { HttpClientModule } from '@angular/common/http';
import { ApisService } from 'src/app/servicios/apis.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuPageRoutingModule,
    HttpClientModule
  ],
  providers:[ApisService],
  declarations: [MenuPage, MenuContactoComponent, MenuSoporteComponent]
})
export class MenuPageModule {}
