import { Component, OnInit } from '@angular/core'
import { NbaService } from 'src/app/services/nba.service'
import { FormGroup, FormControl } from '@angular/forms'
import { MatInput } from '@angular/material'
import { forkJoin } from 'rxjs'


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  searchForm: FormGroup
  b
  text
  data

  constructor(private nbaService: NbaService) {
    this.searchForm = new FormGroup({
      'text': new FormControl('')
    })
  }

  ngOnInit() {
    this.b = false
  }

  headers = ['First Name', 'Last name', 'Height', 'Weight', 'Position', 'Team']
  search() {
    this.text = this.searchForm.get('text').value

    if (this.text.length > 0) {
      this.nbaService.search(this.text).subscribe(data => {
        this.data = data.data
        this.show()
      })
    } else {
      console.log('fail')
    }
  }

  show() {
    console.log(this.data)
    this.b = true
  }
}
