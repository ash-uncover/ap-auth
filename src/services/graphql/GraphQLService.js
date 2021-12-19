import {
  gql
} from '@apollo/client'

export const getViewerData = () => gql`
  query getViewerData {
    viewer {
      id
      name
      avatar
      description
      relations {
        id
        status
        user {
          id
          name
          avatar
          description
        }
      }
      threads {
        id
        name
        type
        users {
          id
          name
          avatar
        }
      }
    }
  }
`

export const getViewerInfo = () => gql`
  query getViewerInfo {
    viewer {
      id
      name
      avatar
      description
    }
  }
`

export const getViewerRelations = () => gql`
  query getViewerRelations {
    viewer {
      id
      relations {
        id
        status
        user {
          id
          name
          avatar
          description
        }
      }
    }
  }
`

export const getUser = (id) => gql`
  query getUser {
    user(id: "${id}") {
      id
      name
      avatar
      description
    }
  }
`

export const createUser = (name) => gql`
  mutation createUser {
    createUser(name: "${name}") {
      id
      name
    }
  }
`

export const updateUser = (user) => gql`
  mutation updateUser($user: UserInfo!) {
    updateUser(user: $user) {
      id
      name
      avatar
      description
    }
  }
`

const GraphQLService = {
  query: {
    getUser,
    getViewerData,
    getViewerInfo,
    getViewerRelations
  },
  mutation: {
    createUser,
    updateUser
  },
  subscription: {}
}

export default GraphQLService