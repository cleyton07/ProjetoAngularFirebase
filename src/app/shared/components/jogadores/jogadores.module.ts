import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JogadoresPageRoutingModule } from './jogadores-routing.module';

import { JogadoresPage } from './jogadores.page';
import { MenuModule } from '../menu/menu.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JogadoresPageRoutingModule,
    MenuModule
  ],
  declarations: [JogadoresPage]
})
export class JogadoresPageModule {}
