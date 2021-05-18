export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60a4093b5024cd00c266003d',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-mmdrpk31',
                  apiId: '10b653e4-ee10-48ed-b2a0-41ac7f9399ac'
                },
                {
                  buildHookId: '60a4093ba8ec340e1f70d121',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-ckjyq1g7',
                  apiId: '2e6e9b11-3b56-4e5d-9b9b-a763c737ec39'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/CodyClark/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-ckjyq1g7.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
