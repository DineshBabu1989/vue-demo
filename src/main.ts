import { createApp, h, provide } from 'vue'
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client/core'
import { DefaultApolloClient } from '@vue/apollo-composable'
import './styles/main.css'
import App from './App.vue'
import initializeRouter from './router'
import i18n from './utils/i18n'
import { COUNTRIES_API_URL } from './constants'

const httpLink = createHttpLink({
  uri: COUNTRIES_API_URL,
})

// Cache implementation
const cache = new InMemoryCache()

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
})

const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient)
  },
  render: () => h(App),
})

initializeRouter(app)

app.use(i18n)

app.mount('#app')
