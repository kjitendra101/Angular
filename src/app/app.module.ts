import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule }  from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AlbumsComponent } from './components/albums/albums.component';
import { PhotosComponent } from './components/photos/photos.component';
import { SidebarmenuComponent } from './components/sidebarmenu/sidebarmenu.component';
import { RightbarComponent } from './components/rightbar/rightbar.component';
import { ProfileComponent } from './components/profile/profile.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'albums', component: AlbumsComponent },
  {path: 'photos', component: PhotosComponent },
  {path: 'profile', component: ProfileComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SidebarComponent,
    AlbumsComponent,
    PhotosComponent,
    SidebarmenuComponent,
    RightbarComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
