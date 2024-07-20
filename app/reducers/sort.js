import { ChangeSort, ChangePage } from '../actions/sort';

const InitialState = {
  sort: 'old',
  currentPage: 1,
};

export default function posts(state = InitialState, action) {
  switch (action.type) {
    case ChangeSort: {
      state.sort = action.sort;
      return state;
    }

    case ChangePage: {
      state.currentPage = action.page;
      return state;
  }

    default:
      return state;
  }
}
