import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from "@angular/common";

import { CommonTabHead } from './tab/tab-head.component';
import { CommonTabItem } from './tab/tab-item.component';
import { CommonTabContent } from './tab/tab-content.component';

const ComponentList:any = [
  CommonTabHead,
  CommonTabItem,
  CommonTabContent
];

@NgModule ({
  imports: [ CommonModule ],
  declarations: ComponentList,
  exports: ComponentList
})

export class Common {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: Common,
      providers: []
    }
  }
}
