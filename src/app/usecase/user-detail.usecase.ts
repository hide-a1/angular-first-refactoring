import { Injectable } from '@angular/core';
import { StoreService } from '../services/store.service';
import { UserApiService } from '../services/user-api.service';

@Injectable({ providedIn: 'root' })
export class UserDetailUsecase {
  get user$() {
    return this.store.select((state) => state.userDetail.user);
  }

  constructor(private userApi: UserApiService, private store: StoreService) {}

  async fetchUser(userId: string) {
    this.store.update((state) => ({
      ...state,
      userDetail: {
        ...state.userDetail,
        user: null,
      },
    }));

    const user = await this.userApi.getUserById(userId);

    this.store.update((state) => ({
      ...state,
      userDetail: {
        ...state.userDetail,
        user,
      },
    }));
  }
}
