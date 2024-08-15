import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId?: string;

  //getter method in a class -> allow you to define how a property of an object is accessed
  //Accessed like properties and defined like methods

  get selectedUser() {
    //searches through array of this.users to find the user id matches this.selectedUserId
    return this.users.find((user) => user.id === this.selectedUserId);
  }

  //method that updates the value of selectedUserId
  onSelectUser(id: string) {
    this.selectedUserId = id;
  }
}
