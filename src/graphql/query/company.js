import {gql} from '@apollo/client';

const GET_COMPANIES = gql`
  query GetCompanies {
    companies {
      id
      name
      address
    }
  }
`;

export default GET_COMPANIES;
