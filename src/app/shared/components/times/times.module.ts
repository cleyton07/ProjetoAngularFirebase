import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TimesPageRoutingModule } from './times-routing.module';

import { TimesPage } from './times.page';
import { MenuModule } from '../menu/menu.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TimesPageRoutingModule,
    MenuModule
  ],
  declarations: [TimesPage]
})
export class TimesPageModule {}
