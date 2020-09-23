import {gql} from '@apollo/client';

const GET_EQUIPMENTS = gql`
  query GetEquipment {
    equipments {
      id
      name
      reference
      available
    }
  }
`;

export default GET_EQUIPMENTS;
