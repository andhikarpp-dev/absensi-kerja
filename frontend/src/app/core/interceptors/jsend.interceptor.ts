import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { JsendResponse } from '../models/jsend-response.model';

export const jsendInterceptor: HttpInterceptorFn = (req, next) => {
  // Skip untuk download file (responseType blob/arraybuffer)
  if (req.responseType === 'blob' || req.responseType === 'arraybuffer') {
    return next(req);
  }
  return next(req).pipe(
    map((event: any) => {
      // Hanya proses HttpResponse
      if (event?.body) {
        const body = event.body as JsendResponse<unknown>;
        if (body.status === 'success') {
          // Kembalikan event dengan data yang sudah diekstrak
          return event.clone({ body: body.data });
        }
        if (body.status === 'fail') {
          throw { type: 'fail', data: body.data };
        }
        if (body.status === 'error') {
          throw { type: 'error', message: (body as any).message };
        }
      }
      return event;
    }),
    catchError((err) => {
      if (err?.type === 'fail' || err?.type === 'error') {
        return throwError(() => err);
      }
      if (err instanceof HttpErrorResponse) {
        const body = err.error as JsendResponse<unknown>;
        if (body?.status === 'fail') {
          return throwError(() => ({ type: 'fail', data: body.data }));
        }
        if (body?.status === 'error') {
          return throwError(() => ({ type: 'error', message: (body as any).message }));
        }
        return throwError(() => ({ type: 'error', message: 'Terjadi kesalahan jaringan' }));
      }
      return throwError(() => err);
    })
  );
};

