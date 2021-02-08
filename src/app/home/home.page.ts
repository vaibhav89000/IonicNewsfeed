import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { NewsServiceService } from '../news-service.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  newsArray:any = [];
  constructor(private newsService:NewsServiceService) {}

  countrySelected;

  country={
  "Argentina": "ar",
  "Australia": "au",
  "Austria": "at",
  "Belgium": "be",
  "Brazil": "br",
  "Bulgaria": "bg",
  "Canada": "ca",
  "China": "cn",
  "Colombia": "co",
  "Cuba": "cu",
  "Czech Republic": "cz",
  "Egypt": "eg",
  "France": "fr",
  "Germany": "de",
  "Greece": "gr",
  "Hong Kong": "hk",
  "Hungary": "hu",
  "India": "in",
  "Indonesia": "id",
  "Ireland": "ie",
  "Israel": "il",
  "Italy": "it",
  "Japan": "jp",
  "Latvia":  "lv",
  "Lithuania": "lt",
  "Malaysia": "my",
  "Mexico": "mx",
  "Morocco": "ma",
  "Netherlands": "nl",
  "New Zealand": "nz",
  "Nigeria": "ng",
  "Norway": "no",
  "Philippines": "ph",
  "Poland": "pl",
  "Portugal": "pt",
  "Romania": "ro",
  "Russia": "ru",
  "Saudi Arabia": "sa",
  "Serbia": "rs",
  "Singapore": "sg",
  "Slovakia": "sk",
  "Slovenia": "si",
  "South Africa": "za",
  "South Korea": "kr",
  "Sweden": "se",
  "Switzerland": "ch",
  "Taiwan": "tw",
  "Thailand": "th",
  "Turkey": "tr",
  "UAE": "ae",
  "Ukraine": "ua",
  "United Kingdom": "gb",
  "United States": "us",
  "Venuzuela": "ve"
  }



  ngOnInit(){
    this.countrySelected = 'ar';
    this.loadNews('ar');
  }

  loadNews(val){
    console.log(this.country);
    this.newsService.getNews(val).subscribe((res)=>{
      this.newsArray = res['articles'];
      console.log('res',res);
    },(err)=>{
      console.log('err',err);
    })
  }

  callType(event){
    console.log('val',event.target.value);
    this.loadNews(event.target.value);
  }



}
