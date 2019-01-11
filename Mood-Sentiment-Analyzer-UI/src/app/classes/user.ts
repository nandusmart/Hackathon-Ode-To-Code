export class UserBase{
name:string;
}

export class Personality extends UserBase{
percentile:number;

}

export class UserInfo{

personality:Personality;
processed_language:string;
word_count:number;

}