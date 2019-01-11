import { Component, OnInit } from '@angular/core';
import {MiningService} from '../mining.service';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.css']
})
export class OrganizationComponent implements OnInit {

  public productName:string;
  public pieChartLabels:string[] = ['A','B'];
  public pieChartData:number[]=[94,33]; 
  public pieChartType:string = 'pie';
  public showPieChart:boolean = false;
  public showTA:boolean = false;
  public textAreaValue: string;
  

  constructor( private miningService: MiningService) { }

  ngOnInit() {
  }
  
  
  public callSentimentAnalyzerService():void{
  
    console.log("Sentimen Analyzer Service is Called");
    
    this.miningService.GetSentimentAnalysisInfo(this.productName).subscribe((data)=>{
        
        if(data){        
            let labels = (data as any).map(a => a.polarity);
            let percentile = (data as any).map(a => a.count);                    
            this.pieChartLabels = labels;
            this.pieChartData = percentile;
            this.showPieChart = true;            
        }
           
    });  
  }
  
  
  public viewJSON():void{
  
    
    
    this.miningService.GetSentimentAnalysisInfo(this.productName).subscribe((data)=>{
        this.showTA = true;
        var jsonString = JSON.stringify(data);
        this.textAreaValue = jsonString;        
    
    });    
    
  }
  

  
  

}
