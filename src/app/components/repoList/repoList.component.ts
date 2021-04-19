import { Component, OnInit } from '@angular/core';
import { GithubReposService } from './../../services/github-repos.service';

@Component({
  selector: 'app-repoList',
  templateUrl: './repoList.component.html',
  styleUrls: ['./repoList.component.css']
})
export class RepoListComponent implements OnInit {

  reposList: any;

  constructor(
    private githubReposService: GithubReposService
  ) { }

  ngOnInit() {
    this.githubReposService.getReposList().subscribe((data: any) => {
      this.reposList = data.items;
    });
  }

}
