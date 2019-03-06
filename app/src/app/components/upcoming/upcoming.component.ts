import { Component, Input } from '@angular/core';

@Component({
  selector: 'upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.less']
})
export class UpcomingComponent {
    @Input() currentTime: string;

    upcomingList = [
        {
            description: 'Meeting',
            time: new Date()
        }
    ]
}
