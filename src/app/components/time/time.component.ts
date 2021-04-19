import { Component, Input, OnInit } from '@angular/core';
import { fromNow } from 'src/app/helpers/date';
import { logging } from 'protractor';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit {

  @Input() submissionTime: any
  @Input() owner: any
  username: string = "Unknown"
  url: string = `https://github.com/${this.username}`

  formattedSubmissionTime: string = "unknown time"

  constructor() { }

  ngOnInit() {
    this.formattedSubmissionTime = fromNow(this.submissionTime)
    this.username = this.owner.login
    this.url = this.owner.html_url
  }

}
