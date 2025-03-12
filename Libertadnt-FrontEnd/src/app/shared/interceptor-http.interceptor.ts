import { HttpInterceptorFn } from '@angular/common/http';

export const interceptorHttpInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('Intercepted Request Headers:', req.headers);
  const token = sessionStorage.getItem('token')
    
  const requestWithAuthorization = req.clone({
    headers: req.headers.set('Authorization', `Bearer ${token}`),
  });
  return next(requestWithAuthorization);
};






