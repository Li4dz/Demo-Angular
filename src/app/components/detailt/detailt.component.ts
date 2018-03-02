import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-detailt',
  templateUrl: './detailt.component.html',
  styles: []
})

export class DetailtComponent implements OnInit {
  @Input() nombreInput:string;


  constructor() { }

  ngOnInit() {
  }

}
