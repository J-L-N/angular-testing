import { inject, Injectable } from "@angular/core";
import { UserInterface } from "../types/user.interface"
import { BehaviorSubject } from "rxjs";
// import { UtilsService } from "./utils.service";

@Injectable()
export class UsersService {
  // utilsService = inject(UtilsService);

  // changed to use RxJS as REACTIVE STATE
  // users: UserInterface[] = [];

  // -------------------------------------------------
  // BehaviorSubject allows to store values and update them as a stream and subscribe to it with subcribe()
  // this is used to store Reactive state inside a service.
  users$ = new BehaviorSubject<UserInterface[]>([]);


  addUser(user: UserInterface): void {
    // this.users = [...this.users, user];

    // -------------------------------------
    // this is used for reactive state
    this.users$.next([...this.users$.getValue(), user]);
  }

  removeUser(userId: string): void {
    // const updatedUsers = this.users.filter((user) => userId !== user.id);
    // this.users = updatedUsers;
    // ----------------------------------------------------------------

    // this is used for reactive state
    const updatedUsers = this.users$.getValue().filter((user) => userId !== user.id);
    this.users$.next(updatedUsers);
  }

  // This is used for mock and spy

  // getUsernames(): string[] {
  //   return this.utilsService.pluck(this.users, 'name');
  // }
}
