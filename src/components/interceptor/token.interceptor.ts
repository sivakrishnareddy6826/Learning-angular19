import { HttpInterceptorFn } from '@angular/common/http';
// We need to register this interceptor in app.config.ts(ProvideHttpClient)
export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('token');
  const newReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`,
    },
  });
  return next(newReq);
};
