export const ACTIONS = {
  MAKE_REQUEST: 'make_request',
  GET_DATA: 'get_data',
  ERROR: 'error',
};

export function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.MAKE_REQUEST:
      return { loading: true, data: null };
    case ACTIONS.GET_DATA:
      return { ...state, loading: false, data: action.payload.data };
    case ACTIONS.ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        data: null,
      };
    default:
      return state;
  }
}
