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
import { viewSlice } from './viewSlice';
export const getAllTypes = createAsyncThunk(
  'type/getAll',
  async (params, thunkAPI) => {
    thunkAPI.dispatch(viewSlice.actions.setIsLoading(true))
    const res = await APICaller.requestGetAllType();
    thunkAPI.dispatch(viewSlice.actions.setIsLoading(false))
    return res.data;
  },
);
export const typeSlice = createSlice({
  name: 'types',
  initialState: [],
  reducers: {
    getAll: (state, action) => {
      state.push({
        id: '-1',
        name: 'Tất cả',
      });
      for (let i = 0; i < action.data.length; i++) {
        state.push({
          id: action.data[i]._id,
          name: action.data[i].name,
        });
      }
    },
    addType: (state, action) => {
      state.push(action.newType);
    },
    deleteType: (state, action) => {
      state = state.filter(type => type.id !== action.typeId);
    },
  },
  extraReducers: {
    [getAllTypes.pending]: state => {
      console.log('pending');
    },
    [getAllTypes.fulfilled]: (state, action) => {
      console.log('fulfilled');
      state = []
      state.push({
        id: '-1',
        name: 'Tất cả',
      });
      for (let i = 0; i < action.payload.length; i++) {
        state.push({
          id: action.payload[i]._id,
          name: action.payload[i].name,
        });
      }
      return state
    },
    [getAllTypes.rejected]: state => {
      console.log('rejected');
    },
  },
});
