import {gql} from "@apollo/client";
const addTypeGQL = gql`
  mutation AddType($_id: ID!, $name: String) {
    addType(_id: $_id, name: $name) {
      _id
      name
    }
  }
`;

const deleteTypeGQL = gql`
  mutation DeleteType($_id: ID!) {
    deleteType(_id: $_id) {
      _id
    }
  }
`;

const addRecipeGQL = gql`
  mutation AddRecipe(
    $_id: ID!
    $name: String
    $intro: String
    $time: Int
    $number: Int
    $level: String
    $tutorial: [String]
    $ingredients: [IngredientInput]
    $types: [String]
    $image: String
  ) {
    addRecipe(
      _id: $_id
      name: $name
      intro: $intro
      time: $time
      number: $number
      level: $level
      tutorial: $tutorial
      ingredients: $ingredients
      types: $types
      image: $image
    ) {
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

export {addTypeGQL, deleteTypeGQL, addRecipeGQL};
