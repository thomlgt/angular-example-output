import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  variable = "COUCOU";

  constructor() { }

  ngOnInit(): void {
  }

  getOutput(event : string) {
    console.log(event)
  }
}
