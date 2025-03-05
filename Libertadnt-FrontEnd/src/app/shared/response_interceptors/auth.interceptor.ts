import { HttpInterceptorFn } from '@angular/common/http';
import { HttpRequest, HttpHandlerFn, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> => {
  const router = inject(Router);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 401) {
        console.error('Unauthorized: Redirecting to login');
        router.navigate(['/noAutorizado']); // Redirect user to login
      } else if (error.status === 403) {
        if(error.message == 'token expirado'){
          router.navigate(['/expirado']);
        } else {
          
        }
      }
      throw error; // Re-throw the error
    })
  );
};

