import { gql } from 'apollo-server';
import { join } from 'path';
import fs from 'fs';

const schema = fs.readFileSync(join(__dirname, 'schema.gql'));

// Parses schema AST.
export default gql`${schema}`
