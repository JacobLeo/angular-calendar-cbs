import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { DemoUtilsModule } from './demo-utils/module';
import { DemoComponent } from './app.component';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { DayViewSchedulerComponent } from './day-view-scheduler.component';
import { FormsModule } from '@angular/forms';  

@NgModule({
  imports: [
    CommonModule,
    FormsModule, 
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    DemoUtilsModule
  ],
  declarations: [DemoComponent, DayViewSchedulerComponent],
  exports: [DemoComponent]
})
export class DemoModule {}
