import { useEffect } from "react";
import { Outlet } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Nav from './components/Nav';
import { GlobalProvider } from './utils/GlobalState';
import './index.css';
import AOS from "aos";
import "aos/dist/aos.css";


const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
function App() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);
  return (
    <ApolloProvider client={client}>
      <div>
        <GlobalProvider>
          <Nav />
          <Outlet />
        </GlobalProvider>
      </div>
    </ApolloProvider>
  );
}

export default App;
