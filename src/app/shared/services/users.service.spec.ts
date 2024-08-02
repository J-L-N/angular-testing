import { UserInterface } from "../types/user.interface";
import { UsersService } from "./users.service";
import { TestBed } from '@angular/core/testing'
// import { UtilsService } from "./utils.service";

describe('UsersServices', () => {
  let usersService: UsersService;

  // ------------------------------
  // for spyOn
  // let utilsService: UtilsService;

  // ----------------------------
  // for mocking
  // const utilsServiceMock = {
  //   pluck: jest.fn(),
  // }

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UsersService,
        // -----------------------------
        // for spyOn
        // UtilsService,

        // --------------------------------------
        // for mocking
        // {provide: UtilsService, useValue: utilsServiceMock},
      ],
    });

    usersService = TestBed.inject(UsersService);
    // utilsService = TestBed.inject(UtilsService);
  });

  it('create a Service', () => {
    expect(usersService).toBeTruthy();
  });

  describe('addUser', () => {
    it('should add a user', () => {
      const user: UserInterface = {
        id: '3',
        name: 'foo'
      }

      usersService.addUser(user);
      // expect(usersService.users).toEqual([{id: '3', name: 'foo'}]);

      // -----------------------------------------------------------
      // for reactive state
      expect(usersService.users$.getValue()).toEqual([{id: '3', name: 'foo'}]);
    })
  });

  describe('removeUser', () => {
    it('should remove a user', () => {
      // usersService.users = [{id: '1', name: 'baz'}, {id: '2', name: 'bar'}, {id: '3', name: 'foo'}];

      // -----------------------------------------------------------------------------
      // for reactive state

      usersService.users$.next([{id: '1', name: 'baz'}, {id: '2', name: 'bar'}, {id: '3', name: 'foo'}]);

      usersService.removeUser('3');

      expect(usersService.users$.getValue().length).toEqual(2);
    });
  });

  // describe('getUsernames', () => {
  //   it('should get usernames', () => {
  //     jest.spyOn(utilsService, 'pluck');
  //     usersService.users = [{id: '3', name: 'foo'}];
  //     usersService.getUsernames();
  //     expect(utilsService.pluck).toHaveBeenCalledWith(usersService.users, 'name');
  //     // utilsServiceMock.pluck.mockReturnValue(['foo']);
  //     // expect(usersService.getUsernames()).toEqual(['foo'])
  //   });
  // });
});
