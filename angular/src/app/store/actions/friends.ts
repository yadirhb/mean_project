//Friendship
export const GET_FRIENDS = "GET_FRIENDS";
export const GET_FRIENDS_REQUEST = "GET_FRIENDS_REQUEST";
export const SET_FRIENDS = "SET_FRIENDS";
export const ADD_FRIEND = "ADD_FRIEND";
export const REMOVE_FRIEND = "REMOVE_FRIEND";

// Friends
export const getFriends = () => ({
  type: GET_FRIENDS
});

export const getFriendsRequest = () => ({
  type: GET_FRIENDS_REQUEST
});

export const setFriends = (friends: any[]) => ({
  type: SET_FRIENDS,
  payload: friends
});

export const addFriend = (friend: any) => ({
  type: ADD_FRIEND,
  payload: friend
});

export const removeFriend = (friend: any) => ({
  type: REMOVE_FRIEND,
  payload: friend
});
