import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from '@nativescript/angular';
import { NativeScriptMaterialBottomNavigationBarModule } from '@nativescript-community/ui-material-bottomnavigationbar/angular';
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component';
import { FirstTabComponent } from './first-tab/first-tab.component';
import { ThirdTabComponent } from './third-tab/third-tab.component';
@NgModule({
    bootstrap: [AppComponent],
    imports: [AppRoutingModule, NativeScriptModule, NativeScriptMaterialBottomNavigationBarModule],
    declarations: [AppComponent, FirstTabComponent, ThirdTabComponent],
    schemas: [NO_ERRORS_SCHEMA],
    providers: [],
})
export class AppModule {}