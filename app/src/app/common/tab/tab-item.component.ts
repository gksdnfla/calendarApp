import { Component, Optional, Input } from "@angular/core";

import { CommonTabHead } from './tab-head.component';

@Component({
  selector: 'common-tab-item',
  templateUrl: 'tab-item.component.html',
  styleUrls: ['tab-item.component.less']
})

export class CommonTabItem {
    @Input() index: string;

    constructor(
        @Optional() private tabHead: CommonTabHead,
    ) {}

    clickHandle(index) {
        this.tabHead.model = index;

        this.tabHead.chooseTab(index);
    }
}
