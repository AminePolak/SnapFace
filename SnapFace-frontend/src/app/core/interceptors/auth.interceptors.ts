import { HttpEvent, HttpHandlerFn, HttpHeaders, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

// @Injectable()
// export class AuthInterceptor implements HttpInterceptor {

//     constructor(private authService: AuthService) { }

//     intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {debugger
//         const headers = new HttpHeaders()
//             .append('Authorization', `Bearer ${this.authService.getToken()}`);
//         const modifiedReq = req.clone({ headers });
//         return next.handle(modifiedReq);
//     }
// }

export function authInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
    const auth = inject(AuthService);
    const token = auth.getToken();

    if (!token) {
        return next(req)
    }

    const headers = new HttpHeaders({
        Authorization: token
    })

    const newReq = req.clone({
        headers
    })

    return next(newReq)
}