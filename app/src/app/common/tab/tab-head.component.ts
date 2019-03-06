import { Component, Input } from '@angular/core';

@Component({
    selector: 'common-tab-head',
    templateUrl: './tab-head.component.html',
    styleUrls: ['./tab-head.component.less']
})

export class CommonTabHead {
    @Input() justifyContent: string;
    @Input() model: string;

    chooseTab(index) {
        this.changeHandle(index);
    }

    changeHandle(index) {
        console.log('changed', index);
    }
}
