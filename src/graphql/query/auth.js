import {gql} from '@apollo/client';
const LOGIN = gql`
  mutation($email: String!, $password: String!) {
    login(credentials: {email: $email, password: $password}) {
      payload {
        token
        user {
          id
        }
      }
      error {
        message
        field
      }
    }
  }
`;

export default LOGIN;
