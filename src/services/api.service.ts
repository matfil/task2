import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { getCurrencyExchangeRateValueBody } from "../models/getCurrencyExchangeRateValueBody";
import { GetCurrencyExchangeRateValueResponse } from "../models/getCurrencyExchangeRateValueResponse";
import { GetAllRecordsResponseFragment } from "../models/getAllRecordsResponseFragment";

@Injectable()
export class ApiService {
    
    constructor(private httpClient:HttpClient){}

    getCurrencyExchangeRateValue(body:getCurrencyExchangeRateValueBody):Observable<GetCurrencyExchangeRateValueResponse> {
        const url:string = "/currencies/get-current-currency-value-command";
        return this.httpClient.post<GetCurrencyExchangeRateValueResponse>(url,body);
    }

    getAllRecords():Observable<GetAllRecordsResponseFragment[]> {
        const url:string = "/currencies/requests";
        return this.httpClient.get<GetAllRecordsResponseFragment[]>(url); 
    }
}        