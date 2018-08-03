import express from 'express';
import graphqlHttp from 'express-graphql';
import gql from './graphql';
import loaders from './graphql/loaders'
import {translate} from './api'
const server = express();


server.use('/graphql', graphqlHttp(req => {
  const authorLoader = loaders.authorLoader;
  const booksLoader = loaders.booksLoader;
  return {
    graphiql: true,
    schema: gql,
    context:{
      authorLoader,
      booksLoader,
      translate
    }

  }
}))



server.listen(9090, () => console.log('🚀 Started on 9090'))

export default server;