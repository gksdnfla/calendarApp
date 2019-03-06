import { Component, Optional, Input } from "@angular/core";

import { CommonTabHead } from './tab-head.component';

@Component({
  selector: 'common-tab-content',
  templateUrl: 'tab-content.component.html',
  styleUrls: ['tab-content.component.less']
})

export class CommonTabContent {
    @Input() model: string;
    @Input() index: string;

    constructor() {}
}
