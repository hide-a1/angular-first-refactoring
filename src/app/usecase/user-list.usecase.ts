import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, map } from 'rxjs';
import { User } from '../user';
import { StoreService } from '../services/store.service';
import { UserApiService } from '../services/user-api.service';

@Injectable({
  providedIn: 'root',
})
export class UserListUsecase {
  get users$() {
    return (
      this.store
        // state.userListに変更があったときだけ後続のpipeが実行される
        .select((state) => state.userList)
        .pipe(
          map(({ items, filter }) =>
            items.filter((user) =>
              (user.first_name + user.last_name).includes(filter.nameFilter)
            )
          )
        )
    );
  }

  get filter$() {
    return this.store.select((state) => state.userList.filter);
  }

  constructor(private userApi: UserApiService, private store: StoreService) {}

  async fetchUsers() {
    const users = await this.userApi.getAllUsers();

    this.store.update((state) => ({
      ...state,
      userList: {
        ...state.userList,
        items: users,
      },
    }));
  }

  setNameFilter(nameFilter: string) {
    this.store.update((state) => ({
      ...state,
      userList: {
        ...state.userList,
        filter: {
          nameFilter,
        },
      },
    }));
  }
}
