import gql from 'graphql-tag'

export const COUNTRIES_QUERY = gql`
  query {
    countries {
      code
      name
      continent {
        code
        name
      }
      currency
      awsRegion
      capital
      currencies
    }
  }
`
export const COUNTRY_DETAILS_QUERY = gql`
  query CountryDetails($code: ID!) {
    country(code: $code) {
      name
      capital
      awsRegion
      code
      continent {
        code
        name
      }
      currencies
      languages {
        code
        name
        native
        rtl
      }
      native
      phone
      phones
      states {
        code
        name
      }
      subdivisions {
        code
        name
      }
    }
  }
`
