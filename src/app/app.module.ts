import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { StudentComponent } from './student/student.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import{ HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DemoComponent } from './demo/demo.component';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { NecklaceComponent } from './necklace/necklace.component';
import { MenRingsComponent } from './men-rings/men-rings.component';
import { CartComponent } from './cart/cart.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxImageZoomModule } from 'ngx-image-zoom';
import {HeadersInterceptor } from './interceptors/headers.interceptor'
import {ErrorInterceptor } from './interceptors/error.interceptor';

//Angular Material Components
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { AdminModule } from './modules/admin/admin.module';
import { UserModule } from './modules/user/user.module';









@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        StudentComponent,
        RegisterComponent,
        LoginComponent,
        FooterComponent,
        DemoComponent,
        ProductsComponent,
        HomeComponent,
        NecklaceComponent,
        MenRingsComponent,
        CartComponent,
       
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: HeadersInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        FontAwesomeModule,
        NgxImageZoomModule,
       
      
       
        // * MATERIAL IMPORTS
        BrowserAnimationsModule,
        MatInputModule,
        MatAutocompleteModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatRadioModule,
        MatSelectModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatMenuModule,
        MatSidenavModule,
        MatToolbarModule,
        MatListModule,
        MatGridListModule,
        MatCardModule,
        MatStepperModule,
        MatTabsModule,
        MatExpansionModule,
        MatButtonToggleModule,
        MatChipsModule,
        MatIconModule,
        MatProgressSpinnerModule,
        MatProgressBarModule,
        MatDialogModule,
        MatTooltipModule,
        MatSnackBarModule,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule,
        MatButtonModule,
        AdminModule,
        UserModule
    ]
})
export class AppModule { }
