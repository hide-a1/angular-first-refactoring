import { TestBed } from '@angular/core/testing';

import { UserListUsecase } from './user-list.usecase';

describe('UserListUsecase', () => {
  let service: UserListUsecase;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserListUsecase);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
