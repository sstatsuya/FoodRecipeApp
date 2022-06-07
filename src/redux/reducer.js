const initState = {
  recipes: [
    {
      id: 1,
      name: 'Cơm gà',
    },
    {
      id: 2,
      name: 'Xôi gấc',
    },
    {
      id: 3,
      name: 'Phở bò',
    },
  ],
};
const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case 'recipe/add':
      return {
        ...state,
        recipes: [...state.recipes, action.data],
      };
    case 'recipe/all':
      return {
        ...state,
        recipes: [
          ...action.data
        ]
      }
    case 'tam':
      return {
        ...state,
        recipes: [
          {
            id: 1,
            name: 'Cơm gà',
          },
        ],
      };
    default:
      return state;
  }
};
export default rootReducer;
