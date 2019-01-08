import gql from "graphql-tag";

// We use the gql tag to parse our query string into a query document

//Hello world sample, please remove
export const getHelloWorld = gql`
  query getHelloWorldFrommsnamecamel{
    getHelloWorldFrommsnamecamel{
      sn
    }
  }
`;


//Hello world sample, please remove
export const msnamecamelHelloWorldSubscription = gql`
  subscription{
    msnamecamelHelloWorldSubscription{
      sn
  }
}`;

export const msnamecamelmsentitypascal = gql`
  query msnamecamelmsentitypascal($id: String!) {
    msnamecamelmsentitypascal(id: $id) {
      _id
      generalInfo {
        name
        description
      }
      state
      creationTimestamp
      creatorUser
      modificationTimestamp
      modifierUser
    }
  }
`;

export const msnamecamelmsentitiespascal = gql`
  query msnamecamelmsentitiespascal($filterInput: FilterInput!, $paginationInput: PaginationInput!) {
    msnamecamelmsentitiespascal(filterInput: $filterInput, paginationInput: $paginationInput) {
      _id
      generalInfo {
        name
        description
      }
      state
      creationTimestamp
      creatorUser
      modificationTimestamp
      modifierUser
    }
  }
`;

export const msnamecamelmsentitiespascalSize = gql`
  query msnamecamelmsentitiespascalSize($filterInput: FilterInput!) {
    msnamecamelmsentitiespascalSize(filterInput: $filterInput)
  }
`;

export const msnamecamelCreatemsentitypascal = gql `
  mutation msnamecamelCreatemsentitypascal($input: msnamecamelmsentitypascalInput!){
    msnamecamelCreatemsentitypascal(input: $input){
      code
      message
    }
  }
`;

export const msnamecamelUpdatemsentitypascalGeneralInfo = gql `
  mutation msnamecamelUpdatemsentitypascalGeneralInfo($id: ID!, $input: msnamecamelmsentitypascalGeneralInfoInput!){
    msnamecamelUpdatemsentitypascalGeneralInfo(id: $id, input: $input){
      code
      message
    }
  }
`;

export const msnamecamelUpdatemsentitypascalState = gql `
  mutation msnamecamelUpdatemsentitypascalState($id: ID!, $newState: Boolean!){
    msnamecamelUpdatemsentitypascalState(id: $id, newState: $newState){
      code
      message
    }
  }
`;

// SUBSCRIPTION
export const msnamecamelmsentitypascalUpdatedSubscription = gql`
  subscription{
    msnamecamelmsentitypascalUpdatedSubscription{
      _id
      generalInfo {
        name
        description
      }
      state
      creationTimestamp
      creatorUser
      modificationTimestamp
      modifierUser
    }
  }
`;
