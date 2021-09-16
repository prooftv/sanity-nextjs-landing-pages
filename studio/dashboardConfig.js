export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
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
                  buildHookId: '61437f2423008a00ac0d75a6',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-4i8sq23k',
                  apiId: '64846ceb-8392-48b9-8d9c-cfbde1a28178'
                },
                {
                  buildHookId: '61437f2403861500d530ada2',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-2kxvg7yn',
                  apiId: '5ff48d0b-2cc9-4ac8-b708-5bba0ae1d4d8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/prooftv/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-2kxvg7yn.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
