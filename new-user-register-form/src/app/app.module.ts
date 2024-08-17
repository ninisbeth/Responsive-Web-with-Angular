import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { AdditionalInformationComponent } from "./additional-information/additional-information.component"; 
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        AppComponent,
        AdditionalInformationComponent
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppModule],
})
export class AppModule {

}