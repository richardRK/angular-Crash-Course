import { AfterContentInit, Component, ContentChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-example',
  template: `
  <ng-content></ng-content>
`
})
export class ContentExampleComponent implements AfterContentInit {

  @ContentChild('contentProjection') contentProjection: ElementRef | undefined;

  ngAfterContentInit() {
    // This hook is called after the content has been projected into the component.
    console.log('ngAfterContentInit called');
    if (this.contentProjection) {
      console.log('Content Projection detected:', this.contentProjection.nativeElement);
    }
  }

  ngAfterContentChecked() {
    // This hook is called after every check of the content.
    console.log('ngAfterContentChecked called');
  }

}
