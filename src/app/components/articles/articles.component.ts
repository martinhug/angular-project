import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/services/data.service';
import { LocalService } from 'src/services/local.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  articles: any;

  constructor(public dataService: DataService, private router: Router, public local: LocalService) { }

  ngOnInit(): void {
    this.dataService.fetchArticles().subscribe(data => {     
      this.articles = data;
      this.local.saveData('articles',  JSON.stringify(data));
    });
  }
}
