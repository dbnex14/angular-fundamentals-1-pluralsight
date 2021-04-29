import {Component, Input} from '@angular/core'

@Component({
  selector: 'event-thumbnail',
  template: `
    <div class="well hoverwell thumbnail">
      <h2>{{event?.name}}</h2>
      <div>Date: {{event?.date}}</div>
      <!--<div [ngClass]="getStartTimeClass()"  apply style using ngClass or ngStyle -->
      <div [ngStyle]="getStartTimeStyle()"
           [ngSwitch]="event?.time">
        Time: {{event?.time}}
        <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
        <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
        <span *ngSwitchDefault>(Normal Start)</span>
      </div>
      <div>Price: \${{event?.price}}</div>
      <div *ngIf="event?.location">
        <span>Location: {{event?.location?.address}}</span>
        <span class="pad-left">{{event?.location?.city}}, {{event?.location?.country}}</span>
      </div>
      <div *ngIf="event?.onlineUrl">
        Online URL: {{event?.onlineUrl}}
      </div>
    </div>
    `,
    styles:[`
      .green { color: #003300 !important; }
      .bold { font-weight: bold; }
      .thumbnail {min-height:210px;}
      .pad-left {margin-left: 10px;}
      .well div {color: #bbb;}
    `]
})
export class EventThumbnailComponent {
  //@Input() decorator tells angular that this 'event' will be
  //passed in from another component.  This is used to communicate
  //to child components (this component) from parent component
  //which is event-list component.
  @Input() event:any

  getStartTimeClass() {
    // ngClass can return (a) object, (b) space separated class names, or (c) array of classes
    // const isEarlyStart = this.event && this.event.time ==='8:00 am'
    // return {green: isEarlyStart, bold: isEarlyStart} // to return an object

    // but ngClass also allows returning string of space separated class names we want to return
    // if (this.event && this.event.time === '8:00 am')
    //   return 'green bold'
    // return '';

    // or return array of classes
    if (this.event && this.event.time === '8:00 am')
      return ['green', 'bold']
    return [];
  }

  getStartTimeStyle(): any {
    if (this.event && this.event.time === '8:00 am')
      return {color: '#003300', 'font-weight': 'bold'}
    return {}
  }
}
