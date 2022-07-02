import { GlobalConfig } from 'payload/types';

const Home: GlobalConfig = {
  slug: 'home',
  label: 'Home page',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'Text',
      type: 'text'
    },
  ],
}

export default Home
