import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatTabChangeEvent, MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { ApiService } from '../services/api.service';
import { GetAllRecordsResponseFragment } from '../models/getAllRecordsResponseFragment';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { GetCurrencyExchangeRateValueResponse } from '../models/getCurrencyExchangeRateValueResponse';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    MatTabsModule, 
    FormsModule, 
    MatButtonModule,
    MatCardModule],
  providers: [ ApiService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  currency:string="";
  name:string="";

  data!:Observable<GetAllRecordsResponseFragment[]>;
  value!:Observable<GetCurrencyExchangeRateValueResponse>;

  constructor(private apiService:ApiService){}

  onSend(){
    this.value = this.apiService.getCurrencyExchangeRateValue( {
      currency: this.currency,
      name: this.name
    });
  }

  tabChanged(event:MatTabChangeEvent){
    if(event.index===1){
      this.data = this.apiService.getAllRecords();
    }
  }

}

