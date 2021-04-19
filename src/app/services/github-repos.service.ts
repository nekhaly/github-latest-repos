import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { formatDate } from '../helpers/date';

@Injectable({
  providedIn: 'root'
})
export class GithubReposService {

  constructor(private http: HttpClient) {}

  public getReposList() {
    const repos: any = {}
    const url = "https://api.github.com/search/repositories"

    const last30DaysDate = formatDate(new Date(Date.now() - 30*24*3600*1000))

    return this.http.get(url, {
      params: {
        q: `created:>${last30DaysDate}`,
        sort: "stars",
        order: "desc",
      }
    })
  }
}
