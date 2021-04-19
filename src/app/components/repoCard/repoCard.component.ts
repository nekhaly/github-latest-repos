import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-repoCard',
  templateUrl: './repoCard.component.html',
  styleUrls: ['./repoCard.component.css']
})
export class RepoCardComponent implements OnInit {

  @Input() repo: any

  constructor() {

  }

  ngOnInit() {
  }

}
