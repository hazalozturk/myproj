import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'

import { FirstTabComponent } from './first-tab/first-tab.component';
import { ThirdTabComponent } from './third-tab/third-tab.component';

const routes: Routes = [
  { path: 'first-tab', component: FirstTabComponent },
  { path: 'third-tab', component: ThirdTabComponent },
]

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
