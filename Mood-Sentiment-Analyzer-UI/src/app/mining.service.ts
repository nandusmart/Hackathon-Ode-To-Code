import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Personality} from './classes/user';
import {catchError} from 'rxjs/internal/operators';
import {UserInfo} from './classes/user';
import {HttpErrorHandler, HandleError} from './http-error-handler.service';


@Injectable({
    providedIn:'root'
})

export class MiningService{

    private handleError:HandleError;
    private url : string = "https://cognitive-engine.cfapps.io/api/moodstatus";
    private financialURL : string = "https://twitter-engine-latest.cfapps.io/getFinPercent";
    private financialEntityURL:string = "https://twitter-engine-latest.cfapps.io/getEntities";
    private sentimentAnalyzerURL:string = "https://twitter-engine-latest.cfapps.io/getProductSentiment";

    constructor(private http:HttpClient, private httpErrorHandler:HttpErrorHandler){
        this.handleError = httpErrorHandler.createHandleError("MiningService");
    }

    public GetUserInfo(userName:string):Observable<Array<Personality>>{

        //return this.http.get<Array<Personality>>(this.url);
        return this.http.get<Array<Personality>>(this.url + "/" + userName)
        .pipe(
            catchError(this.handleError("Please enter a valid Twitter Handle",[]))
        );

    }


    public GetFinancialInfo(userName:string):Observable<Array<Personality>>{

        return this.http.get<Array<Personality>>(this.financialURL + "/" + userName)
        .pipe(
            catchError(this.handleError("Please enter a valid Twitter Handle",[]))
        );

    }

    public GetFinancialEntityInfo(userName:string):Observable<Array<Personality>>{

        return this.http.get<Array<Personality>>(this.financialEntityURL + "/" + userName)
        .pipe(
            catchError(this.handleError("Please enter a valid Twitter Handle",[]))
        );

    }


    public GetSentimentAnalysisInfo(productName:string):Observable<Array<Personality>>{

        return this.http.get<Array<Personality>>(this.sentimentAnalyzerURL + "/" + productName)
        .pipe(
            catchError(this.handleError("Please enter a valid Product Name",[]))
        );

    }

}
