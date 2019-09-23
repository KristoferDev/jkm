import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start-image',
  templateUrl: './start-image.component.html',
  styleUrls: ['./start-image.component.scss']
})
@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class StartImageComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
