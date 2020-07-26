import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReceipeComponent } from './receipe/receipe.component';
import { RatingComponent } from './rating/rating.component';
import { HttpClientModule } from '@angular/common/http';
import { WelcomeComponent } from './welcome/welcome.component';
import { RouterModule } from '@angular/router';
import { DetailReceipeComponent } from './detail-receipe/detail-receipe.component';
import { ReceipeDetailGuard } from './detail-receipe/receipe-detail.guard';
import { NgImageSliderModule } from 'ng-image-slider';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
@NgModule({
  declarations: [
    AppComponent,
    ReceipeComponent,
    RatingComponent,
    WelcomeComponent,
    DetailReceipeComponent,
    LoginFormComponent,
    SignupFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgImageSliderModule,
    SocialLoginModule,
    RouterModule.forRoot([
      { path: 'receipe', component: ReceipeComponent },
      { path: 'detail-receipe/:id', component: DetailReceipeComponent, canActivate: [ReceipeDetailGuard] },
      { path: 'welcome', component: WelcomeComponent },
      { path: 'signup', component: SignupFormComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' }
    ])
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '1083295643814-4e3vl1894upt2p3qpqitpvf5knieofbq.apps.googleusercontent.com'
            ),
          },
        ],
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
