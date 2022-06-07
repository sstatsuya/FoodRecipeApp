import axios from 'axios';

export default APICaller = {
  requestGetAllRecipe: async () => {
    return axios({
      method: 'GET',
      url: `https://tien-food-recipe.herokuapp.com/recipe/all`,
      data: null,
    })
      .then(res => res)
      .catch(err => err.response);
  },
};
