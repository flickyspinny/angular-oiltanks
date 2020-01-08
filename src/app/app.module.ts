import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Client } from 'shopify-buy';
import {MatGridListModule} from '@angular/material/grid-list';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import { MaintabsComponent } from './maintabs/maintabs.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
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
  ],
  imports: [
    BrowserModule,
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
    MatGridListModule,
    RouterModule.forRoot([
//      { path: '', component: OiltanksComponent },
      { path: 'domestic_heating_oil_tanks', component: OiltanksComponent },
      { path: 'domestic_heating_oil_insurance', component: OilinsuranceComponent },
      { path: 'boilerjuice_connected', component: BoilerjuiceconnectedComponent },
      { path: 'domestic_oil_gas_boiler_service', component: BoilerserviceComponent },
      { path: 'replace_oil_gas_boiler_heat_pump', component: HeatpumpsComponent },
      { path: 'domestic_heating_oil_tanks/:tankId', component: TankdetailsComponent},
//      { path: 'domestic_heating_oil_tanks/:productName', component: ProductDetailsComponent },      
      { path: '**', component: OiltanksComponent },
    ])
  ],
  providers: [
    HttpClientModule,
    TankService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }