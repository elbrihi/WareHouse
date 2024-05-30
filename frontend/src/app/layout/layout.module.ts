import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HeaderComponent } from "./components/header/header.component";



@NgModule({
    declarations: [],
    exports : [],
    imports: [RouterModule]
})

export class LayoutModule
{
    constructor(){
        console.log("Layout")
    }
}