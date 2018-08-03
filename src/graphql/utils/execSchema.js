import {makeExecutableSchema} from 'graphql-tools';


const executeSchema = (typeDefs, resolvers) => 
  makeExecutableSchema({typeDefs, resolvers})



export default executeSchema;