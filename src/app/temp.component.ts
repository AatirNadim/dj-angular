import { Component } from "@angular/core"; 
@Component({
    selector: "temp",
    templateUrl: "./temp.component.html",
})
export class TempComponent { 
    title = "temp";
    constructor() {
        console.log("TempComponent constructor");
    }
}
