import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  private isSidebarOpenSubject = new BehaviorSubject<boolean>(true);
  isSidebarOpen$ = this.isSidebarOpenSubject.asObservable();

  toggleSidebar() {
    this.isSidebarOpenSubject.next(!this.isSidebarOpenSubject.value);
  }
}