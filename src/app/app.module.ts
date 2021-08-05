import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductService } from './services/product.service';
import { FilterPipe } from './filter.pipe';
import { ApplyRedColorDirective } from './directives/applyRedColor.directive';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    ProductListComponent, 
    FilterPipe, 
    ApplyRedColorDirective  
  ],
  imports: [
    BrowserModule,FormsModule, 
  ],
  providers: [{provide:"productService", useClass:ProductService}],
  bootstrap: [SearchBarComponent]
})
export class AppModule { }
