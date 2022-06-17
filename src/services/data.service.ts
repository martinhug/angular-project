import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";


@Injectable()
export class DataService {
    // articles_api = 'http://localhost:3000/articles.json';
    articels_local = './assets/articles.json';
    

    constructor(private http: HttpClient) {}

    fetchArticles() {
        return this.http.get(this.articels_local);
    }
}