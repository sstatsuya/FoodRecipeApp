import axios from 'axios';

export default APICaller = {
  // Type
  requestGetAllType: async () => {
    return axios({
      method: 'GET',
      url: `https://tien-food-recipe.herokuapp.com/type/all`,
      data: null,
    })
      .then(res => res)
      .catch(err => err.response);
  },

  requestAddType: async newType => {
    console.log(
      'JSON: ' +
        JSON.stringify({
          id: newType.id,
          name: newType.name,
        }),
    );
    return axios({
      method: 'POST',
      url: `http://localhost:3000/type/add`,
      data: JSON.stringify({
        id: newType.id,
        name: newType.name,
      }),
    })
      .then(res => res)
      .catch(err => err.response);
  },

  requestDeleteType: async typeId => {
    return axios({
      method: 'DELETE',
      url: `https://tien-food-recipe.herokuapp.com/type/delete/${typeId}`,
      data: null,
    })
      .then(res => res)
      .catch(err => err.response);
  },

  // Recipe
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
