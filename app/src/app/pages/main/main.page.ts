import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.less']
})
export class MainPage {
    private tabIndex = 0;
    private currentTime = new Date();
    private now = new Date();
    private weeks = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    private selectedDate = null;
    private url = window.location.href;
    private monthList = ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'];

    constructor(
        private http: HttpClient
    ) {
        console.log('get')
        fetch('https://shanghai.anjuke.com/sale/?from=navigation')
            .then(function(res) {
                console.log(res);
            })
    }

    private getFirstDay(time) {
        return new Date(new Date(time).setDate(1));
    }

    private getLastDay(time) {
        time = new Date(time);
        return new Date(new Date(time).setMonth(time.getMonth() + 1, 0));
    }

    private getRow() {
        // return Math.ceil((this.getFirstDay(this.currentTime).getDay() + this.getLastDay(this.currentTime).getDate()) / 7);
        return 6;
    }

    private getDate(index) {
        let curMonth = this.currentTime.getMonth();
        let curFirstDate = this.getFirstDay(this.currentTime);
        let curLastDate = this.getLastDay(this.currentTime);
        let prevLastDate = this.getLastDay(new Date(this.currentTime).setMonth(curMonth - 1));

        if(index < curFirstDate.getDay()) {
            return new Date(new Date(this.currentTime).setMonth(curMonth - 1, prevLastDate.getDate() - curFirstDate.getDay() + index + 1));
        }
        else if(index >= curFirstDate.getDay() && index < curFirstDate.getDay() + curLastDate.getDate() - 1) {
            return new Date(new Date(this.currentTime).setDate(index - curFirstDate.getDay() + 1));
        }

        return new Date(new Date(this.currentTime).setMonth(curMonth + 1, index - curFirstDate.getDay() - curLastDate.getDate() + 1));
    }

    private chooseDate(date) {
        if(this.selectedDate && this.selectedDate.getTime() === date.getTime()) {
            this.selectedDate = null;
        }
        else {
            this.selectedDate = date;
        }
    }

    private prevMonth() {
        this.currentTime = new Date(this.currentTime.setMonth(this.currentTime.getMonth() - 1));
    }

    private nextMonth() {
        this.currentTime = new Date(this.currentTime.setMonth(this.currentTime.getMonth() + 1));
    }
}
