import { Component, OnInit } from '@angular/core';
import data from '../../data/employees.json';

@Component({
  selector: 'app-organigramme',
  templateUrl: './organigramme.component.html',
  styleUrls: ['./organigramme.component.css']
})
export class OrganigrammeComponent implements OnInit {

  employees: any;

  constructor() {
    this.employees = data.employees;
  }

  ngOnInit(): void {
  }

}
