import { HttpClientModule } from '@angular/common/http';
import { BrowserModule, Title, Meta } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Client } from 'shopify-buy';
import {MatGridListModule} from '@angular/material/grid-list';
import { environment } from '../environments/environment';
import {LayoutModule} from '@angular/cdk/layout';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import { CloudinaryModule, CloudinaryConfiguration } from '@cloudinary/angular-5.x';
import { Cloudinary } from 'cloudinary-core';
import { NgxJsonLdModule } from '@ngx-lite/json-ld';








import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import { MaintabsComponent } from './maintabs/maintabs.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatSortModule} from '@angular/material/sort';
import { OilinsuranceComponent } from './oilinsurance/oilinsurance.component';
import { OiltanksComponent } from './oiltanks/oiltanks/oiltanks.component';
import { OiltankresultsComponent } from './oiltanks/oiltankresults/oiltankresults.component';
import { OiltankfilterComponent } from './oiltanks/oiltankfilter/oiltankfilter.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { BoilerjuiceconnectedComponent } from './boilerjuiceconnected/boilerjuiceconnected.component';
import { BoilerserviceComponent } from './boilerservice/boilerservice.component';
import { HeatpumpsComponent } from './heatpumps/heatpumps.component';
import { TankdetailsComponent } from './oiltanks/tankdetails/tankdetails.component';
import { SelectedtankPipe } from './pipes/selectedtank.pipe';
import { TankService } from './services/tank.service';
import { FooterComponent } from './headerandfooter/footer/footer.component';
import { HeaderComponent } from './headerandfooter/header/header.component';
import { AboutusComponent } from './general/aboutus/aboutus.component';
import { ContactusComponent } from './general/contactus/contactus.component';
import { FAQComponent } from './general/faq/faq.component';
import { PrivacyComponent } from './general/privacy/privacy.component';
import { TermsComponent } from './general/terms/terms.component';
import { OiltankinstallersComponent } from './oiltankinstallers/oiltankinstallers.component';



const config = {
      apiKey: "AIzaSyBxyVTrfNZzURbB7iAzNqb3Re0PUVm8jgI",
      authDomain: "fir-demo-11999.firebaseapp.com",
      databaseURL: "https://fir-demo-11999.firebaseio.com",
      projectId: "fir-demo-11999",
      storageBucket: "fir-demo-11999.appspot.com",
      messagingSenderId: "523182969306",
      appId: "1:523182969306:web:728dc4ab515f4da9c5f0e3",
//      measurementId: "G-HRYD4GB1SQ"
    };


@NgModule({
  declarations: [
    AppComponent,
    MaintabsComponent,
    OilinsuranceComponent,
    OiltanksComponent,
    OiltankfilterComponent,
    OiltankresultsComponent,
    BoilerjuiceconnectedComponent,
    BoilerserviceComponent,
    HeatpumpsComponent,
    TankdetailsComponent,
    SelectedtankPipe,
    FooterComponent,
    HeaderComponent,
    AboutusComponent,
    ContactusComponent,
    FAQComponent,
    PrivacyComponent,
    TermsComponent,
    OiltankinstallersComponent,

  ],


  imports: [
    LayoutModule,
    BrowserModule,
    NgxJsonLdModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatCheckboxModule,
    MatCardModule,
    MatTabsModule,
    MatTableModule,
    MatExpansionModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatSortModule,
    MatGridListModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    FlexLayoutModule,
    CloudinaryModule.forRoot({Cloudinary}, { cloud_name: 'cloudinaryepic'} as CloudinaryConfiguration),
    MatSidenavModule,
    RouterModule.forRoot([
//      { path: '', component: OiltanksComponent },
      { path: 'domestic_heating_oil_tanks', component: OiltankresultsComponent },
      { path: 'domestic_heating_oil_insurance', component: OilinsuranceComponent },
      { path: 'reduce_your_heating_bills', component: BoilerjuiceconnectedComponent },
      { path: 'domestic_oil_gas_boiler_service', component: BoilerserviceComponent },
      { path: 'replace_oil_gas_boiler_heat_pump', component: HeatpumpsComponent },
      { path: 'oil_tank_installers', component: OiltankinstallersComponent},
      { path: 'about_smartnow', component: AboutusComponent },    
      { path: 'contact_smartnow', component: ContactusComponent },   
      { path: 'privacy_policy', component: PrivacyComponent },  
      { path: 'faq', component: FAQComponent },  
      { path: 'terms_and_conditions', component: TermsComponent },  
      { path: 'domestic_heating_oil_tanks/:tankId/:productName', component: TankdetailsComponent},
//      { path: 'domestic_heating_oil_tanks/:productName', component: ProductDetailsComponent },      
      { path: '**', component: OiltanksComponent },
    ],
    {scrollPositionRestoration: 'enabled'})
  ],
  providers: [
    HttpClientModule,
    TankService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }