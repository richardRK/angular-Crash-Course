import { Component, OnInit,Input, Output, EventEmitter, SimpleChanges, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements AfterViewInit {

  @Input() text:string | undefined;
  @Input() color:string | undefined;
  @Output() btnClick = new EventEmitter();


  message:string | undefined;
  constructor() { }

  ngOnInit(): void {
    console.log(this.color);
    console.log(this.btnClick);
    console.log(this.message);
  }
  
  ngOnChanges(changes: SimpleChanges) {
    if (changes['color']) {
      this.message = `Input changed to: ${changes['color'].currentValue}`;
    }
  } 

  ngAfterViewInit() {
    const button = document.querySelector('#myButton');
  }
  onClick(){
    this.btnClick.emit();
  }

}
