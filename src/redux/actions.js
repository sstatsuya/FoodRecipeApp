import APICaller from '../utils/APICaller';

// View
export const setIsLoading = isLoading => {
  return {
    type: 'view/setIsLoading',
    isLoading,
  };
};

export const addRecipe = data => {
  return {
    type: 'recipe/add',
    data,
  };
};

export const changeSearchText = text => {
  return {
    type: 'view/changeSearchText',
    payload: {
      text,
    },
  };
};

export const changeTypeFilter = id => {
  return {
    type: 'view/changeTypeFilter',
    id,
  };
};

// Type
export const getAllType = data => {
  return {
    type: 'type/all',
    data,
  };
};
export const requestGetAllType = () => {
  return async dispatch => {
    dispatch(setIsLoading(true));
    const res = await APICaller.requestGetAllType();
    if (res.status > 199 && res.status < 300) {
      dispatch(getAllType(res.data));
    } else {
      alert('Đã có lỗi khi get all type');
    }
    dispatch(setIsLoading(false));
  };
};

export const addType = newType => {
  return {
    type: 'type/addType',
    newType,
  };
};

export const requestAddType = newType => {
  return async dispatch => {
    dispatch(setIsLoading(true));
    const res = await APICaller.requestAddType(newType);
    if (res.status > 199 && res.status < 300) {
      dispatch(addType(newType));
    } else {
      alert('Đã có lỗi khi thêm type');
      console.log(res);
    }
    dispatch(setIsLoading(false));
  };
};

export const deleteType = typeId => {
  return {
    type: 'type/deleteType',
    typeId,
  };
};

export const requestDeleteType = typeId => {
  return async dispatch => {
    dispatch(setIsLoading(true));
    let res = await APICaller.requestDeleteType(typeId);
    if (res.status > 199 && res.status < 300) {
      dispatch(deleteType(typeId));
    } else {
      console.log(res);
      alert('Đã có lỗi khi xóa type ' + res.status);
    }
    dispatch(setIsLoading(false));
  };
};

// Recipe
export const getAllRecipe = data => {
  return {
    type: 'recipe/all',
    data,
  };
};

export const requestGetAllRecipe = () => {
  return async dispatch => {
    dispatch(setIsLoading(true));
    const res = await APICaller.requestGetAllRecipe();
    if (res.status > 199 && res.status < 300) {
      dispatch(getAllRecipe(res.data));
    } else {
      alert('Đã có lỗi khi get all recipe');
    }
    dispatch(setIsLoading(false));
  };
};
