// https://github.com/payloadcms/public-demo/blob/master/src/collections/Pages/index.ts

import { CollectionConfig } from 'payload/types';
import Content from '../blocks/Content';

const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    defaultColumns: [
      'title',
    ]
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      label: 'Page Title',
      type: 'text',
      required: true,
    },
    {
      name: 'layout',
      label: 'Page Layout',
      type: 'blocks',
      minRows: 1,
      blocks: [
        Content,
        // Accordion,
        // Form,
        // Media,
        // MediaContent,
        // MediaSlider,
      ],
    },
  ],
}

export default Pages;
