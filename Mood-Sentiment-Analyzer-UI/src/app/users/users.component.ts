import { Component, OnInit } from '@angular/core';
import {MiningService} from '../mining.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public twitterHandle:string;
  public pieChartLabels:string[] = ['A'];
  public pieChartData:number[]=[94]; 
  public pieChartType:string = 'pie';
  public showPieChart:boolean = false;
  
  public pieChart2Labels:string[] = ['Z'];
  public pieChart2Data:number=55;
  public pieChart2Type:string = 'pie';
  public showPieChart2:boolean = false;
  
  public showTA:boolean = false;
  public textAreaValue: string;
  public showTA2:boolean = false;
  public textAreaValue2: string;
  public showCircle:boolean = false;
  public percent:number = 2;
  

  constructor( private miningService: MiningService) { }

  ngOnInit() {
  }
  
  public callMoodStatusService():void{
  
    console.log("Mood Status Service is Called");
    
    this.miningService.GetUserInfo(this.twitterHandle).subscribe((data)=>{
        
        if(data && data.hasOwnProperty('personality'))
        {   
            let labels = (data as any).personality.map(a => a.name);
            let percentile = (data as any).personality.map(a => a.percentile);        
            this.pieChartLabels = labels;
            this.pieChartData = percentile;
            this.showPieChart = true; 
            this.showCircle = false;
            this.showPieChart2 = false;
            this.showTA2 = false;
        }
           
    });  
  }
  
  
public callFinancialPatternService():void{
  
    console.log("Financial Pattern Service is Called");
    
    this.miningService.GetFinancialInfo(this.twitterHandle).subscribe((data)=>{
        
        if(data && data.hasOwnProperty('finPercent'))
        {
            console.log(data);
            //let labels = (data as any).map(a => a.mergedFinTweetCounts);
            this.percent = (data as any).finPercent;
            this.showCircle = true; 
        }                   
    });  
    
    this.miningService.GetFinancialEntityInfo(this.twitterHandle).subscribe((data)=>{
    
        if(data){
        
            let labels = (data as any).map(a => a.entityName);
            let percentile = (data as any).map(a => a.salience);                    
            this.pieChart2Labels = labels;
            this.pieChart2Data = percentile;
            this.showPieChart2 = true;            
        }

    
    });
    
    this.showPieChart = false;
    this.showTA = false;
    
  }
  
  public viewJSON():void{    
    
    this.miningService.GetUserInfo(this.twitterHandle).subscribe((data)=>{
        this.showTA = true;
        var jsonString = JSON.stringify(data);
        this.textAreaValue = jsonString;
    
    });    
    
  }
  
  
    public viewJSON2():void{    
    
    this.miningService.GetFinancialEntityInfo(this.twitterHandle).subscribe((data)=>{
        this.showTA2 = true;
        var jsonString = JSON.stringify(data);
        this.textAreaValue2 = jsonString;
    
    });    
    
  }
  
  
  //
  public chartClicked(e:any):void{
    console.log(e);
  
  }

    public chartHovered(e:any):void{

        console.log(e);
    }
}
