import { Component, OnInit } from '@angular/core';
import { NbaService } from 'src/app/services/nba.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  searchForm: FormGroup;
  b: boolean;
  text: string;
  data: any;
  headers = ['First Name', 'Last name', 'Height', 'Weight', 'Position', 'Team'];

  constructor(private nbaService: NbaService) {
    this.searchForm = new FormGroup({
      text: new FormControl('')
    });
  }

  ngOnInit() {
    this.b = false;
  }

  search() {
    this.text = this.searchForm.get('text').value;

    if (this.text.length > 0) {
      this.nbaService.search(this.text).subscribe(data => {
        this.data = data.data;
        this.show();
      });
    } else {
      console.log('fail');
    }
  }

  show() {
    console.log(this.data);
    this.b = true;
  }
}
