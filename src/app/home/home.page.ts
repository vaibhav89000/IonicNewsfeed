import { Component, OnInit } from '@angular/core';
import { NewsServiceService } from '../news-service.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  constructor(private newsService:NewsServiceService) {}

  ngOnInit(){
    this.loadNews();
  }

  loadNews(){
    this.newsService.getNews().subscribe((res)=>{
      console.log('res',res);
    },(err)=>{
      console.log('err',err);
    })
  }

}
