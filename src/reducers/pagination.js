const defaultFilters = {
  page: 1
};

export default function(state = defaultFilters, action) {
  switch (action.type) {
      case 'SET_NEXT_PAGE':
          return {
            page: action.page  
          };
      default:
          return state;
  }
};