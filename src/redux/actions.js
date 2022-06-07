import APICaller from '../utils/APICaller';

export const addRecipe = data => {
  return {
    type: 'recipe/add',
    data,
  };
};

export const tam = () => {
  return {
    type: 'tam',
  };
};

export const getAllRecipe = data => {
  return {
    type: 'recipe/all',
    data,
  };
};

export const requestGetAllRecipe = () => {
  return async dispatch =>{
    const res = await APICaller.requestGetAllRecipe();
    dispatch(getAllRecipe(res.data));
  }
};
