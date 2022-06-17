import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @Input('id') articleId: any;
  @Input('title') articleTitle = '';
  @Input('author') articleAuthor = '';
  @Input('body') articleBody = '';
  article = {};

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    // code
  }

  navigateToArticle(): void {
    this.router.navigate(['/article', this.articleId]);
  }

}
