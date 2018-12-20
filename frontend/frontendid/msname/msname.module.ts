import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../../core/modules/shared.module';
import { DatePipe } from '@angular/common';
import { FuseWidgetModule } from '../../../core/components/widget/widget.module';

import { msnamecamelService } from './msname.service';
import { msnamecamelListService } from './msname-list/msname-list.service';
import { msnamecamelListComponent } from './msname-list/msname-list.component';
import { msnamecamelDetailService } from './msname-detail/msname-detail.service';
import { msnamecamelDetailComponent } from './msname-detail/msname-detail.component';

const routes: Routes = [
  {
    path: '',
    component: msnamecamelListComponent,
  },
  {
    path: 'ms-name/:username',
    component: msnamecamelDetailComponent,
  }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    FuseWidgetModule
  ],
  declarations: [
    msnamecamelListComponent,
    msnamecamelDetailComponent  
  ],
  providers: [ msnamecamelService, msnamecamelListService, msnamecamelDetailService, DatePipe]
})

export class msnamecamelModule {}