import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { DemoInputComponent } from './components/input/demo-input/demo-input.component';
import { PipeDemoComponent } from './components/pipe-demo/pipe-demo.component';
import { SummaryPipe } from './components/summary.pipe';
import { CustomInputComponent } from './components/input/custom-input/custom-input.component';
import { CustomOutputComponent } from './components/output/custom-output/custom-output.component';
import { DemoOutputComponent } from './components/output/demo-output/demo-output.component';
import { StockComponent } from './components/output/stock/stock.component';
import { StockStatusComponent } from './components/output/stock-status/stock-status.component';
import { DemoDirectiveComponent } from './components/directives/demo-directive/demo-directive.component';
import { DemoSwitchCaseComponent } from './components/directives/demo-switch-case/demo-switch-case.component';
import { InputFormatDirective } from './components/directives/input-format.directive';
import { DemoTemplateComponent } from './components/directives/demo-template/demo-template.component';
import { StringRangeDirective } from './components/directives/string-range.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DemoInputComponent,
    PipeDemoComponent,
    SummaryPipe,
    CustomInputComponent,
    CustomOutputComponent,
    DemoOutputComponent,
    StockComponent,
    StockStatusComponent,
    DemoDirectiveComponent,
    DemoSwitchCaseComponent,
    InputFormatDirective,
    DemoTemplateComponent,
    StringRangeDirective
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
        path: 'demo-output', component: DemoOutputComponent
      },
      {
        path: 'stock-component', component: StockComponent
      },
      {
        path: 'demo-directive', component: DemoDirectiveComponent
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

