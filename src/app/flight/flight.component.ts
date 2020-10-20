import { Component, OnInit } from '@angular/core';



export class Flight {
  public orginalFlight: string;
  public destinationFlight: string;

  public regdate: Date;
  public nums: number;



}

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component_r6.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent implements OnInit {

  constructor() { }
  model = new Flight();
  fg: string;
  ngOnInit(): void {
  }


  onSubmit(form): void {
    this.fg = 'price:' + '$' + (form.value.nums * 150).toString();
    console.log('$' + form.value.nums * 150 );
  }
}
