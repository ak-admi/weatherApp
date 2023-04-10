import { Component } from '@angular/core';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weatherApp';
  myWeather:any;
  cityName:string='';
  temperature: number=0;
  minTemp:number=0;
  maxTemp:number=0;
  humidity:number=0;
  wind:number=0;


  constructor (private weatherService:WeatherService){

  }




  ngOnInit():void{
    this.weatherService.getWeatherData('Denver').subscribe({
      next:(res)=>{
        console.log(res);
        this.myWeather=res;
        console.log(this.myWeather);
        this.cityName=this.myWeather.name;
        this.temperature=this.myWeather.main.temp;
        this.maxTemp=this.myWeather.main.temp_max;
        this.minTemp=this.myWeather.main.temp_min;
        this.humidity=this.myWeather.main.humidity;
        this.wind=this.myWeather.wind.speed;
      },
      error:(error)=>console.log(error.message),
      complete:() => console.info('Api call completed')
    })

  }




  getWeather(searchName:HTMLInputElement):void{
    this.weatherService.getWeatherData(searchName.value).subscribe({
      next:(res)=>{
        console.log(this.cityName);
        console.log(res);
        this.myWeather=res;
        console.log(this.myWeather);
        this.cityName=this.myWeather.name;
        this.temperature=this.myWeather.main.temp;
        this.maxTemp=this.myWeather.main.temp_max;
        this.minTemp=this.myWeather.main.temp_min;
        this.humidity=this.myWeather.main.humidity;
        this.wind=this.myWeather.wind.speed;
      },
      error:(error)=>alert('Weather not found for the location')
      ,
      complete:() => console.info('Api call completed')
    })

  }



}
