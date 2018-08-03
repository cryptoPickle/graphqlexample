import readDefs from './utils/readql';
import executeGQL from './utils/execSchema';
import resolvers from './resolvers'

const typeDefs = readDefs('./graphql/schema/schema.graphql');

export default executeGQL(typeDefs,resolvers);
