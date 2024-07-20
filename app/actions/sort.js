export const ChangeSort = 'canny/posts/change_sort';
export function changeSort(sort) {
  return {
    sort,
    type: ChangeSort,
  };
}

export const ChangePage = 'canny/posts/change_page';
export function changePage(page) {
  return {
    page,
    type: ChangePage,
  };
}