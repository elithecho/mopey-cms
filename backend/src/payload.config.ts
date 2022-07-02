import { buildConfig } from 'payload/config';
import path from 'path';

import Users from './collections/Users'
import Pages from './collections/Pages'
import Posts from './collections/Posts'

import Home from './globals/Home';
import Nav from './globals/Nav';
import Banner from './globals/Banner';

export default buildConfig({
  serverURL: 'http://localhost:3000',
  admin: {
    user: Users.slug,
  },
  globals: [
    Home,
    Nav,
    Banner,
  ],
  collections: [
    Users,
    Pages,
    Posts,
    // Add Collections here
    // Examples,
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts')
  },
});
