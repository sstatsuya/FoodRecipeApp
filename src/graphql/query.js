import {gql} from '@apollo/client';
export const getType = gql`
  query {
    types {
      _id
      name
    }
    recipes {
      _id
      name
      intro
      time
      number
      level
      tutorial
      ingredients {
        name
        amount
      }
      typeList {
        _id
        name
      }
      image
    }
  }
`;
