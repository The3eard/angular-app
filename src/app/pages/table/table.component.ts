import { Component, OnInit } from '@angular/core';
import { NbaService } from 'src/app/services/nba.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor(private nbaService: NbaService) { }

  ngOnInit() {
    let string = 'harden'
    this.nbaService.search(string).subscribe(data => console.log(data));
  }

  results;

}
