import { ChangeSort, ChangePage } from '../actions/sort';

const InitialState = {
  sort: 'old',
  currentPage: 1,
};

export default function posts(state = InitialState, action) {
  switch (action.type) {
    case ChangeSort: {
      return {
        ...state,
        sort
      }
    }

    case ChangePage: {
      return {
        ...state,
        currentPage: action.page,
      };
    }

    default:
      return state;
  }
}
