import { Component } from "@angular/core";


@Component({

    templateUrl:'./template.html'
    
})
export class CounterComponent {

    counter =10

    increaseBy(value:number){

        this.counter += value;
    }

    resetCounter(){

        this.counter = 10;
    }

}