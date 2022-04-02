import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AddComponent } from '../components/add/add.component';

@Injectable({
  providedIn: 'root',
})
export class LeaveGuard implements CanDeactivate<any> {
  canDeactivate(
    component: AddComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | UrlTree
    | boolean {
    if (component.isLeaveSafe || !component.addForm.dirty) {
      return true;
    }
    return confirm('Are you sure?');
  }
}
