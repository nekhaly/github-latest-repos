import { Component, Input, OnInit } from '@angular/core';
import { formatNumber } from '../../helpers/numbers';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.css']
})
export class IssuesComponent implements OnInit {

  @Input() issuesCount: any
  formattedIssuesCount: string = "0"

  constructor() { }

  ngOnInit() {
    this.formattedIssuesCount = formatNumber(this.issuesCount)
  }

}
