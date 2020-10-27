import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
myDate = Date.now();
  constructor() { }

  ngOnInit() {
    $(document).ready(function(){
      $('.icon').click(function(){
        $('.search').toggleClass('active');
      });
    });
  }

}
