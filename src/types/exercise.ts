export interface ShowExercises {
  second: boolean
  third: boolean
}

export interface Continent {
  code: string
  name: string
}

export interface Country {
  code: string
  name: string
  continent: Continent
  currency: string
  awsRegion: string
  capital: string
  currencies: string[]
}

export interface CountriesQueryResult {
  countries: Country[]
}
