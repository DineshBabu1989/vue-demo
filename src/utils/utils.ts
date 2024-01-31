import { Country } from '../types/exercise'

export const SEARCH_DELAY = 500

export function debounce(func: Function, delay: number) {
  let timerId: ReturnType<typeof setTimeout>
  return function (...args: any[]) {
    if (timerId) {
      clearTimeout(timerId)
    }
    timerId = setTimeout(() => {
      func(...args)
    }, delay)
  }
}

export function filterCountries(countries: Country[], searchTerm: String) {
  return countries.filter((country) =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase()),
  )
}
