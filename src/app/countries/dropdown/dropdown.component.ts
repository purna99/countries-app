import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Country } from 'src/app/models/country.model';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  @Input() label: string;
  @Input() dropDownList: Country[];
  @Output() optionSelected = new EventEmitter<string>();
  selectedOption: string;

  constructor() { }

  ngOnInit() {
  }

  optionChange(event) {
    this.optionSelected.emit(event);
  }

}
