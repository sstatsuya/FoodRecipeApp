// const initState = [];

// export const typeSlice = (state = initState, action) => {
//   switch (action.type) {
//     // Type
//     case 'type/all':
//       let newTypes = [
//         {
//           id: '-1',
//           name: 'Tất cả',
//         },
//       ];
//       for (let i = 0; i < action.data.length; i++) {
//         newTypes.push({
//           id: action.data[i]._id,
//           name: action.data[i].name,
//         });
//       }
//       return [...newTypes];
//     case 'type/addType':
//       return [...state, action.newType];
//     case 'type/deleteType':
//       let deletedTypes = state.filter((item, index) => {
//         return item.id !== action.typeId;
//       });
//       return [...deletedTypes];
//     default:
//       return state;
//   }
// };

import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import APICaller from '../utils/APICaller';
import Function from '../utils/Function';
import {viewSlice} from './viewSlice';
export const getAllTypes = createAsyncThunk(
  'type/getAll',
  async (params, thunkAPI) => {
    thunkAPI.dispatch(viewSlice.actions.setIsLoading(true));
    const res = await APICaller.requestGetAllType();
    thunkAPI.dispatch(viewSlice.actions.setIsLoading(false));
    return res.data;
  },
);
export const typeSlice = createSlice({
  name: 'types',
  initialState: [],
  reducers: {
    getAll: (state, action) => {
      for (let i = 0; i < action.payload.data.length; i++) {
        state.push({
          id: action.payload.data[i]._id,
          name: action.payload.data[i].name
        });
      }
    },
    addType: (state, action) => {
      state.push({
        id: action.payload.id,
        name: action.payload.name
      })
    },
    deleteType: (state, action) => {
      state = state.filter(type => type.id !== action.payload);
      return state
    },
  },
  extraReducers: {
    [getAllTypes.pending]: state => {},
    [getAllTypes.fulfilled]: (state, action) => {
      state = [];
      for (let i = 0; i < action.payload.length; i++) {
        state.push({
          id: action.payload[i]._id,
          name: action.payload[i].name,
        });
      }
      return state;
    },
    [getAllTypes.rejected]: state => {},
  },
});
