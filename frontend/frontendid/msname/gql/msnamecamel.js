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


export const msnamecamelentitycamel = gql`
  query msnamecamelentitycamel($filterInput: FilterInput!, $paginationInput: PaginationInput!) {
    msnamecamelentitycamel(filterInput: $filterInput, paginationInput: $paginationInput) {
      _id
      name
      description
      creationTimestamp
      creatorUser
      modifierTimestamp
      modifierUser
    }
  }
`;

export const msnamecamelentitycamelSize = gql`
  query msnamecamelentitycamelSize($filterInput: FilterInput!) {
    msnamecamelentitycamelSize(filterInput: $filterInput)
  }
`;

export const msnamecamelCreatemsentitycamel = gql `
  mutation msnamecamelCreatemsentitycamel($generalInfo: msnamecamelentityGeneralInfo!){
    msnamecamelCreatemsentitycamel(generalInfo: $generalInfo)
  }
`;
