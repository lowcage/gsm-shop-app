import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

  @Input() currentPage: string = '';
  @Output() selectedPage: EventEmitter<string> = new EventEmitter();
  @Output() onCloseSidenav: EventEmitter<boolean> = new EventEmitter();
  @Input() loggedInUser?: firebase.default.User | null;
  @Output() onLogout: EventEmitter<boolean> = new EventEmitter();


  toolbarSwitch() {
    this.selectedPage.emit(this.currentPage);
  }

  close(logout?: boolean) {
    if (logout === true) {
      this.onLogout.emit(logout)
    }
    this.onCloseSidenav.emit(true);
  }
}
