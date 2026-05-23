import { ApplicationConfig } from '@angular/core';
import { provideRouter, withViewTransitions, withRouterConfig } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { APP_BASE_HREF } from '@angular/common';

import { routes } from './app.routes';
import { jwtInterceptor } from './core/interceptors/jwt.interceptor';
import { jsendInterceptor } from './core/interceptors/jsend.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    { provide: APP_BASE_HREF, useValue: '/ak/' },
    provideRouter(
      routes,
      withViewTransitions(),
      withRouterConfig({ onSameUrlNavigation: 'reload' })
    ),
    provideHttpClient(
      withInterceptors([jwtInterceptor, jsendInterceptor])
    ),
    provideAnimationsAsync(),
  ]
};

