export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // token:
  //   "BQAx8GOfysPpEH6l3ecI1kMW4_x8kL-Ob1GG616FR3NeFbFOtFyxwSbl0IQ7LrhIF42das9l2TgIzoBoi3N_sfORE_JyZp6jVShPCKQgwpyj111lqV8bv9j8N0dZJJaXMClG_3s6SJovHgp0SVqJPiYwKIjXozls3MJGbmTIfBkT9KDKHt-J7LbHHQbK47Wc3CCx1ahOYRD9XOQ6cNPl",
}

const reducer = (state, action) => {
  console.log(action)

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      }
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      }
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      }
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      }
    default:
      return state
  }
}

export default reducer
