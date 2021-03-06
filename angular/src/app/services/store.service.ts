import { Injectable } from "@angular/core";
import { store } from "../store/index";
import { saveJWT, logout, saveUser, addFriend2, removeFriend2 } from "../store/actions/app";
import {
  addFriend,
  removeFriend,
  setFriends,
  getFriendsRequest
} from "../store/actions/friends";

@Injectable({
  providedIn: "root"
})
export class StoreService {
  getFriendsRequest() {
    store.dispatch(getFriendsRequest());
  }

  getState() {
    return store.getState();
  }

  getStore() {
    return store;
  }

  getUser() {
    return this.getState().app.user;
  }

  saveUser(user) {
    store.dispatch(saveUser(user));
  }

  saveToken(token) {
    store.dispatch(saveJWT(token));
  }

  addFriend(friend) {
    store.dispatch(addFriend(friend));
    store.dispatch(addFriend2(friend.username));
  }

  removeFriend(friend) {
    store.dispatch(removeFriend(friend));
    store.dispatch(removeFriend2(friend.username));
  }

  setFriends(friends: string[]) {
    store.dispatch(setFriends(friends));
  }

  getFriendsState(): any {
    return store.getState().friends;
  }

  getFriendsData() {
    return this.getFriendsState().data;
  }

  logout() {
    store.dispatch(logout());
  }

  getToken() {
    return this.getState().app.jwt;
  }
}
