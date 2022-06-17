import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataService } from 'src/services/data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ArticlesComponent } from './components/articles/articles.component';
import { HomeComponent } from './components/home/home.component';
import { ArticleComponent } from './components/article/article.component';
import { ArticleDetailsComponent } from './components/article-details/article-details.component';
import { LocalService } from 'src/services/local.service';

@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    HomeComponent,
    ArticleComponent,
    ArticleDetailsComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [DataService, LocalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
