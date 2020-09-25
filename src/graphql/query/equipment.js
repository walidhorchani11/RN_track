import {gql} from '@apollo/client';

const GET_EQUIPMENTS = gql`
  query GetEquipment {
    equipments {
      id
      name
      reference
      available
      user {
        id
        name
        image
      }
    }
  }
`;

export default GET_EQUIPMENTS;
