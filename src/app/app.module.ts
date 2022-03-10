import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AppRoutingModule } from './app-routing.module';
import { GoogleMapsModule } from '@angular/google-maps';

import { AppComponent } from './app.component';
import { AccommodationComponent } from './accommodation/accommodation.component';
import { RoomsComponent } from './accommodation/rooms/rooms.component';
import { AuthComponent } from './auth/auth.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { HomeComponent } from './home/home.component';
import { LifestyleComponent } from './lifestyle/lifestyle.component';
import { EntertainmentComponent } from './lifestyle/entertainment/entertainment.component';
import { ExcursionsComponent } from './lifestyle/excursions/excursions.component';
import { ResortActivitiesComponent } from './lifestyle/resort-activities/resort-activities.component';
import { WellnessComponent } from './lifestyle/wellness/wellness.component';
import { HeaderComponent } from './navigation/header/header.component';
import { NavtabsComponent } from './navigation/navtabs/navtabs.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { OffersComponent } from './offers/offers.component';
import { WeddingsComponent } from './weddings/weddings.component';

import { DiningComponent } from './dining/dining.component';
import { RestaurantsComponent } from './dining/restaurants/restaurants.component';
import { BarsComponent } from './dining/bars/bars.component';
import { AboutComponent } from './about/about.component';
import { AmenitiesComponent } from './amenities/amenities.component';
import { HomeExperiencesComponent } from './home/home-experiences/home-experiences.component';
import { HomeGalleryComponent } from './home/home-gallery/home-gallery.component';
import { HomeOccassionsComponent } from './home/home-occassions/home-occassions.component';
import { FooterComponent } from './footer/footer.component';
import { MapComponent } from './map/map.component';
import { HomeOffersComponent } from './home/home-offers/home-offers.component';
import { HomeRoomsComponent } from './home/home-rooms/home-rooms.component';



@NgModule({
  declarations: [
    AppComponent,
    AccommodationComponent,
    RoomsComponent,
    AuthComponent,
    SigninComponent,
    SignupComponent,
    ExperiencesComponent,
    HomeComponent,
    LifestyleComponent,
    EntertainmentComponent,
    ExcursionsComponent,
    ResortActivitiesComponent,
    WellnessComponent,
    HeaderComponent,
    NavtabsComponent,
    SidenavListComponent,
    OffersComponent,
    WeddingsComponent,
    DiningComponent,
    RestaurantsComponent,
    BarsComponent,
    AboutComponent,
    AmenitiesComponent,
    HomeExperiencesComponent,
    HomeGalleryComponent,
    HomeOccassionsComponent,
    FooterComponent,
    MapComponent,
    HomeOffersComponent,
    HomeRoomsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    CarouselModule,
    GoogleMapsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
