import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state): boolean => {
  const router = inject(Router);
  const auth = inject(AuthService)

  const token = auth.getToken();
  if (token) {
    return true;
  } else {
    router.navigateByUrl('/auth/login');
    return false;
  }
};
