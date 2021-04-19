import { Component, Input, OnInit } from '@angular/core';
import { formatNumber } from '../../helpers/numbers';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {

  @Input() starsCount: any
  formattedStarsCount: string = "0"

  constructor() { }

  ngOnInit(): void {
    this.formattedStarsCount = formatNumber(Number(this.starsCount))
  }


}
