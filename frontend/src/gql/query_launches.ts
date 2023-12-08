import { gql } from "@apollo/client";

export const GET_ALL_LAUNCHES = gql`
  query getAllLaunches($page: Int, $limit: Int) {
    getAllLaunches(page: $page, limit: $limit) {
      docs {
        id
        date_utc
        rocket
        flight_number
        name
      }
      totalDocs
      offset
      limit
      totalPages
      page
      pagingCounter
      hasPrevPage
      hasNextPage
      prevPage
      nextPage
    }
  }
`;

export const GET_ONE_LAUNCH = gql`
  query getOneLaunch($launchId: ID!) {
    getOneLaunch(id: $launchId) {
      id
      date_utc
      rocket
      flight_number
      name
      details
      links {
        patch {
          small
        }
        presskit
        webcast
        wikipedia
      }
    }
  }
`;
