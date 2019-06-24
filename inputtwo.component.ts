import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-inputtwo',
  templateUrl: './inputtwo.component.html',
  styleUrls: ['./inputtwo.component.css']
})
export class InputtwoComponent implements OnInit {

  constructor(public dataService: DataService ) { }
  ngOnInit() {
  }

}
