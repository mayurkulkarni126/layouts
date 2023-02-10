import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RouterTabs } from './router-tab/router-tabs.directive';
import { RouterTab } from './router-tab/router-tab.directive';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [ RouterTabs, RouterTab],
  exports: [
    CommonModule,
    RouterTabs,
    RouterTab
  ]
})
export class SharedModule {}
