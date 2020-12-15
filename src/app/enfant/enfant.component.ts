import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-enfant',
  templateUrl: './enfant.component.html',
  styleUrls: ['./enfant.component.scss']
})
export class EnfantComponent implements OnInit {

  @Input() nom_du_input : string = "";

  @Output() nom_du_output = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    console.log(this.nom_du_input);
  }

  sendParent() {
    this.nom_du_output.emit("AU REVOIR");
  }

}
