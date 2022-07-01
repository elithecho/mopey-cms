import { GlobalConfig } from 'payload/types';

const Banner: GlobalConfig = {
  slug: 'banner',
  label: 'Banner',
  fields: [
    {
      name: 'show',
      type: 'checkbox',
    },
    {
      name: 'text',
      type: 'text',
    },
    {
      name: 'link',
      type: 'text',
    }
  ],
}

export default Banner
