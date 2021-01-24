import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { DemoInputComponent } from './components/input/demo-input/demo-input.component';
import { PipeDemoComponent } from './components/pipe-demo/pipe-demo.component';
import { SummaryPipe } from './components/pipe-demo/summary.pipe';
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
import { TemplateDrivenFormComponent } from './components/form/template-driven-form/template-driven-form.component';
import { SignupFormComponent } from './components/form/signup-form/signup-form.component';
import { DemoFormArrayComponent } from './components/form/demo-form-array/demo-form-array.component';
import { DemoChangePasswordComponent } from './components/form/demo-change-password/demo-change-password.component';
import { DemoHttpComponent } from './components/demo-http/demo-http.component';
import { DemoHttpService } from './services/demo-http.service';
import { CourseListComponent } from './components/course-list/course-list.component';
import { CourseCardComponent } from './components/course-card/course-card.component';
import { ObservableCoursesComponent } from './components/courses/observable-courses/observable-courses.component';
import { StoreCoursesComponent } from './components/courses/store-courses/store-courses.component';
import { RxjsMapOperatorComponent } from './components/rxjs-map-operator/rxjs-map-operator.component';

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
    StringRangeDirective,
    TemplateDrivenFormComponent,
    SignupFormComponent,
    DemoFormArrayComponent,
    DemoChangePasswordComponent,
    DemoHttpComponent,
    CourseListComponent,
    CourseCardComponent,
    ObservableCoursesComponent,
    StoreCoursesComponent,
    RxjsMapOperatorComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
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
        path: 'template-driven-form', component: TemplateDrivenFormComponent
      },
      {
        path: 'reactive-form', component: SignupFormComponent
      },
      {
        path: 'demo-form-array', component: DemoFormArrayComponent
      },
      {
        path: 'demo-change-password', component: DemoChangePasswordComponent
      },
      {
        path: 'demo-http', component: DemoHttpComponent
      },
      {
        path: 'observable-courses', component: ObservableCoursesComponent
      },
      {
        path: 'store-courses', component: StoreCoursesComponent
      },
      {
        path: 'rxjs-map-operator', component: RxjsMapOperatorComponent
      },
      {
        path: '', component: PipeDemoComponent
      }
    ])
  ],
  providers: [
    DemoHttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

