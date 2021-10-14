import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotesDisplayerComponent } from './quotes-displayer/quotes-displayer.component';
import { ClickCounterComponent } from './click-counter/click-counter.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FirstRouteComponent } from './first-route/first-route.component';
import { SecondRouteComponent } from './second-route/second-route.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgSelectExampleComponent } from './ng-select-example/ng-select-example.component';
import { SelectScrollExampleComponent } from './select-scroll-example/select-scroll-example.component';
import { ParentComponent } from './child-component-testing/parent/parent.component';
import { ChildComponent } from './child-component-testing/child/child.component';
import { CodemirrorBindingComponent } from './codemirror-test1/codemirror-binding/codemirror-binding.component';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';

@NgModule({
  declarations: [
    AppComponent,
    QuotesDisplayerComponent,
    ClickCounterComponent,
    ProfileEditorComponent,
    FirstRouteComponent,
    SecondRouteComponent,
    PageNotFoundComponent,
    NgSelectExampleComponent,
    SelectScrollExampleComponent,
    ParentComponent,
    ChildComponent,
    CodemirrorBindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgSelectModule,
    FormsModule,
    CodemirrorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
