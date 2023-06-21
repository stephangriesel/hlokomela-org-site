import { defineConfig } from 'astro/config';
import NetlifyCMS from 'astro-netlify-cms';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [
    tailwind({
      config:{
        path: './custom-config.cjs'
      }
    }),
    NetlifyCMS({
      config: {
        backend: {
          name: 'git-gateway',
          branch: 'latest',
        },
        media_folder: 'public/upload',
        public_folder: '/upload',
        logo_url: `https://res.cloudinary.com/dvme554nj/image/upload/v1687318146/logo_cqhhz9.png`,
        collections: [
          {
            name: 'media',
            label: 'Media',
            label_singular: 'Blog Post',
            folder: 'src/pages/media',
            create: true,
            delete: true,
            fields: [
              { name: 'title', widget: 'string', label: 'Post Title' },
              {
                name: 'publishDate',
                widget: 'datetime',
                format: 'DD MMM YYYY',
                date_format: 'DD MMM YYYY',
                time_format: false,
                label: 'Publish Date',
              },
              { name: 'author', widget: 'string', label: 'Author Name', required: false },
              { name: 'authorURL', widget: 'string', label: 'Author URL', required: false },
              { name: 'description', widget: 'string', label: 'Description', required: false },
              { name: 'body', widget: 'markdown', label: 'Post Body' },
              {
                name: 'layout',
                widget: 'select',
                default: '../../layouts/BlogPost.astro',
                options: [
                  { label: 'Media Post', value: '../../layouts/BlogPost.astro' },
                ],
              },
            ],
          },
          {
            name: 'forms',
            label: 'Forms',
            label_singular: 'Forms',
            folder: 'src/pages/forms',
            create: true,
            delete: true,
            fields: [
              { name: 'title', widget: 'string', label: 'Post Title' },
              {
                name: 'publishDate',
                widget: 'datetime',
                format: 'DD MMM YYYY',
                date_format: 'DD MMM YYYY',
                time_format: false,
                label: 'Publish Date',
              },
              { name: 'author', widget: 'string', label: 'Author Name', required: false },
              { name: 'authorURL', widget: 'string', label: 'Author URL', required: false },
              { name: 'description', widget: 'string', label: 'Description', required: false },
              {
                name: 'pdfFile',
                widget: 'file',
                label: 'PDF File',
                required: false,
                accept: ['application/pdf'],
              },
              { name: 'body', widget: 'markdown', label: 'Post Body' },
              {
                name: 'layout',
                widget: 'select',
                default: '../../layouts/BlogPost.astro',
                options: [
                  { label: 'Forms', value: '../../layouts/BlogPost.astro' },
                ],
              },
            ],
          },          
          {
            name: 'annualreports',
            label: 'Annual Reports',
            label_singular: 'Annual Reports',
            folder: 'src/pages/annualreports',
            create: true,
            delete: true,
            fields: [
              { name: 'title', widget: 'string', label: 'Post Title' },
              {
                name: 'publishDate',
                widget: 'datetime',
                format: 'DD MMM YYYY',
                date_format: 'DD MMM YYYY',
                time_format: false,
                label: 'Publish Date',
              },
              { name: 'author', widget: 'string', label: 'Author Name', required: false },
              { name: 'authorURL', widget: 'string', label: 'Author URL', required: false },
              { name: 'description', widget: 'string', label: 'Description', required: false },
              {
                name: 'pdfFile',
                widget: 'file',
                label: 'PDF File',
                required: false,
                accept: ['application/pdf'],
              },
              { name: 'body', widget: 'markdown', label: 'Post Body' },
              {
                name: 'layout',
                widget: 'select',
                default: '../../layouts/BlogPost.astro',
                options: [
                  { label: 'Forms', value: '../../layouts/BlogPost.astro' },
                ],
              },
            ],
          },
          {
            name: 'articlelinks',
            label: 'Article Links',
            label_singular: 'Article Links',
            folder: 'src/pages/articlelinks',
            create: true,
            delete: true,
            fields: [
              { name: 'title', widget: 'string', label: 'Post Title' },
              {
                name: 'publishDate',
                widget: 'datetime',
                format: 'DD MMM YYYY',
                date_format: 'DD MMM YYYY',
                time_format: false,
                label: 'Publish Date',
              },
              { name: 'author', widget: 'string', label: 'Author Name', required: false },
              { name: 'authorURL', widget: 'string', label: 'Author URL', required: false },
              { name: 'description', widget: 'string', label: 'Description', required: false },
              { name: 'body', widget: 'markdown', label: 'Post Body' },
              {
                name: 'layout',
                widget: 'select',
                default: '../../layouts/BlogPost.astro',
                options: [
                  { label: 'Forms', value: '../../layouts/BlogPost.astro' },
                ],
              },
            ],
          },
          {
            name: 'projectvideos',
            label: 'Project Videos',
            label_singular: 'Project Videos',
            folder: 'src/pages/projectvideos',
            create: true,
            delete: true,
            fields: [
              { name: 'title', widget: 'string', label: 'Post Title' },
              {
                name: 'publishDate',
                widget: 'datetime',
                format: 'DD MMM YYYY',
                date_format: 'DD MMM YYYY',
                time_format: false,
                label: 'Publish Date',
              },
              { name: 'author', widget: 'string', label: 'Author Name', required: false },
              { name: 'authorURL', widget: 'string', label: 'Author URL', required: false },
              { name: 'description', widget: 'string', label: 'Description', required: false },
              { name: 'body', widget: 'markdown', label: 'Post Body' },
              {
                name: 'layout',
                widget: 'select',
                default: '../../layouts/BlogPost.astro',
                options: [
                  { label: 'Forms', value: '../../layouts/BlogPost.astro' },
                ],
              },
            ],
          },
        ],
      },
      previewStyles: ['/src/styles/blog.css'],
    }),
  ],
});
