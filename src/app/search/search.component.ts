import { Component, OnInit } from '@angular/core';
import {GithubService} from '../github/github.service'
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  user: any[];
  repos: any[];
  username: string;
  constructor(private githubService: GithubService){
  }

  searchUser(){
    this.githubService.updateUser(this.username);
    this.githubService.getUserInfo().subscribe(user =>{
      console.log(user);
      this.user = user;
    });
    this.githubService.getUserRepos().subscribe(repos =>{
      console.log(repos);
      this.repos = repos;
    })
  }

  ngOnInit() {
  }

}
