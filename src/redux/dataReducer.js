const initState = {
  types: [],
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
  view: {
    recipeSearchText: '',
    typeSearchId: '-1',
    isLoading: false,
  },
};
const dataReducer = (state = initState, action) => {
  switch (action.type) {
    case 'recipe/add':
      return {
        ...state,
        recipes: [...state.recipes, action.data],
      };
    case 'view/changeTypeFilter':
      return {
        ...state,
        view: {
          ...state.view,
          typeSearchId: action.id,
        },
      };
    case 'view/setIsLoading':
      return {
        ...state,
        view: {
          ...state.view,
          isLoading: action.isLoading,
        },
      };
    // Type
    case 'type/all':
      let newTypes = [
        {
          id: '-1',
          name: 'Tất cả',
        },
      ];
      for (let i = 0; i < action.data.length; i++) {
        newTypes.push({
          id: action.data[i]._id,
          name: action.data[i].name,
        });
      }
      return {
        ...state,
        types: [...newTypes],
      };
    case 'type/addType':
      return {
        ...state,
        types: [state.types, action.newType],
      };
    // Recipe
    case 'recipe/all':
      return {
        ...state,
        recipes: [...action.data],
      };
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
export default dataReducer;
