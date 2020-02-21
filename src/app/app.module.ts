import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { DemoInputComponent } from './components/demo-input/demo-input.component';
import { PipeDemoComponent } from './components/pipe-demo/pipe-demo.component';
import { SummaryPipe } from './components/summary.pipe';
import { CustomInputComponent } from './components/custom-input/custom-input.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DemoInputComponent,
    PipeDemoComponent,
    SummaryPipe,
    CustomInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'demo-pipe', component: PipeDemoComponent
      },
      {
        path: 'demo-input', component: DemoInputComponent
      },
      {
        path: '', component: PipeDemoComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
