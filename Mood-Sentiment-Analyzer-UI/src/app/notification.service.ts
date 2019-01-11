import {Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material';

@Injectable()
export class NotificationService{

    constructor(public snackBar:MatSnackBar){}
    
    notify(message:string, duration:number=5000,actionmsg="Dismiss",className:string = ''){
        if(className == ''){
        
            this.snackBar.open(message,actionmsg,{
            duration:duration,
            });
        }
        else{
            this.snackBar.open(message,actionmsg,{
            duration:duration,
            panelClass:[className]
            });
        }
    
    }


}