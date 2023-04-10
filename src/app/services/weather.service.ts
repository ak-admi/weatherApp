import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) { }

  getWeatherData(cityName:string){
    console.log('https://api.openweathermap.org/data/2.5/weather?q='+ cityName +'&appid=bd6c8aae0efb5a8681486c23ab6989ae&units=metric');
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?q='+ cityName +'&appid=bd6c8aae0efb5a8681486c23ab6989ae&units=metric');
    // return this.http.get(environment.weatherApiBaseURl,{
    //   headers:new HttpHeaders()
    //   .set(environment.XRapidAPIHostLabel,environment.XRapidAPIHostValue)
    //   .set(environment.XRapidAPIKeyLabel,environment.XRapidAPIKeyValue),
    //   params: new HttpParams()
    //   .set('q',cityName)
    //   .set('units','metric')
    // }) cityname:string
  }

  public get(url: string, options?: any) {
    return this.http.get(url, options);
    }
}
