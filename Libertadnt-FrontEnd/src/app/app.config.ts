import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { withInterceptors } from '@angular/common/http';
import { interceptorHttpInterceptor } from './shared/interceptor-http.interceptor.js';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { authInterceptor } from './shared/response_interceptors/auth.interceptor.js';
import { auth500Interceptor } from './shared/500interceptor/auth500.interceptor.js';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(),provideHttpClient(),
    provideHttpClient(withInterceptors([interceptorHttpInterceptor, authInterceptor, auth500Interceptor]))
  ]
};





