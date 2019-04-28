import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CalendarEvent, CalendarEventTimesChangedEvent, CalendarDateFormatter, CalendarView, DAYS_OF_WEEK } from 'angular-calendar';
import { colors } from '/demo-utils/colors';
import { addHours, startOfDay } from 'date-fns';
import { Subject } from 'rxjs';
import { USERS } from '../users'; 
import { User } from '../user'; 


@Component({
  selector: 'mwl-demo-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'app.component.html',
  styleUrls:['app.component.css'],
})


export class DemoComponent {
  view: string = 'month';

  viewDate = new Date();

  users = USERS; 

  selectedUser: User; 
  
  selectedEvent: CalendarEvent; 


  events: CalendarEvent[] =  [
  {
      title: 'Lukkevagt',
      color: USERS[0].color,
      start: addHours(startOfDay(new Date()), 5),
      meta: {
        user: USERS[0]
      },
      resizable: {
        beforeStart: true,
        afterEnd: true
      },
       actions: [
        {
          label: '<i class="fa fa-fw fa-pencil"></i>',
          onClick: ({ event }: { event: CalendarEvent }): void => {
            this.selectedEvent = event; 
            this.display = "block"; 
            console.log('Edit event', event);
          }
        },
        {
          label: '<i class="fa fa-fw fa-times"></i>',
          onClick: ({ event }: { event: CalendarEvent }): void => {
            this.events = this.events.filter(iEvent => iEvent !== event);
            console.log('Event deleted', event);
          }
        }
      ],
      draggable: true
    },
     {
      title: 'Åbnevagt',
      color: USERS[1].color,
      start: addHours(startOfDay(new Date()), 2),
      end: addHours(startOfDay(new Date()), 10),
      meta: {
        user: USERS[1]
      },
      resizable: {
        beforeStart: true,
        afterEnd: true
      },
      actions: [
        {
          label: '<i class="fa fa-fw fa-pencil"></i>',
          onClick: ({ event }: { event: CalendarEvent }): void => {
            this.selectedEvent = event; 
            this.display = "block"; 
            console.log('Edit event', event);
          }
        },
        {
          label: '<i class="fa fa-fw fa-times"></i>',
          onClick: ({ event }: { event: CalendarEvent }): void => {
            this.events = this.events.filter(iEvent => iEvent !== event);
            console.log('Event deleted', event);
          }
        }
      ],
      draggable: true
    },
    {
      title: 'Vikar vagt',
      color: USERS[2].color,
      start: addHours(startOfDay(new Date()), 4),
      meta: {
        user: USERS[2]
      },
      resizable: {
        beforeStart: true,
        afterEnd: true
      },
      actions: [
        {
          label: '<i class="fa fa-fw fa-pencil"></i>',
          onClick: ({ event }: { event: CalendarEvent }): void => {
            this.selectedEvent = event; 
            this.display = "block"; 
            console.log('Edit event', event);
          }
        },
        {
          label: '<i class="fa fa-fw fa-times"></i>',
          onClick: ({ event }: { event: CalendarEvent }): void => {
            this.events = this.events.filter(iEvent => iEvent !== event);
            console.log('Event deleted', event);
          }
        }
      ],
      draggable: true
    }
];  


  display = 'none'; 

  eventClicked({ event }: { event: CalendarEvent }): void {
    this.selectedEvent = event; 
    this.display = 'block'; 
    console.log('Event clicked', this.selectedEvent);
  }

eventTimesChanged({
    event,
    newStart,
    newEnd
  }: CalendarEventTimesChangedEvent): void {
    event.start = newStart;
    event.end = newEnd;
    this.refresh.next();
  }

  userChanged({ event, newUser }) {
    event.color = newUser.color;
    event.meta.user = newUser;
    this.refresh.next();
  }

  onCloseHandled (){
    this.display = 'none'; 
  }

  openDialog (){
    this.display = 'block'; 
  }

refresh: Subject<any> = new Subject();

onSelect(user: User, event: CalendarEvent){
  this.selectedUser = this.selectedEvent.meta.user
}

}
