import { GlobalConfig } from 'payload/types';

const Nav: GlobalConfig = {
  slug: 'nav',
  label: 'Navbar',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'links',
      type: 'array',
      labels: {
        singular: 'Link',
        plural: 'Links',
      },
      fields: [
        {
          name: 'text',
          type: 'text',
        },
        {
          name: 'link',
          type: 'text',
        },
        {
          label: 'Open in a new tab?',
          type: 'checkbox',
          name: 'tab',
        }
      ]
    },
  ],
}

export default Nav
