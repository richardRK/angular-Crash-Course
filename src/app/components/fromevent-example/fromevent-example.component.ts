import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-fromevent-example',
  template: `
    <button #myButton>Click Me</button>
  `,
})
export class FromeventExampleComponent implements AfterViewInit {
  @ViewChild('myButton') button: ElementRef | undefined;

  ngAfterViewInit() {
    const buttonClick$ = fromEvent(this.button?.nativeElement, 'click');

    buttonClick$
      .pipe(
        map((event: any) => event.clientX)
      )
      .subscribe(clientX => {
        console.log(`Button clicked at X coordinate: ${clientX}`);
      });
  }

}
