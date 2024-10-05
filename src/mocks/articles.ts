import { type PostProps } from 'components/Post'

export const mockArticles: PostProps[] = [
  {
    title: 'Software Engineer vs Product Engineer (Portuguese 🇧🇷)',
    canonical_url:
      'https://www.objective.com.br/insights/software-engineer-vs-product-engineer/',
    cover_image:
      'https://www.objective.com.br/wp-content/uploads/2024/10/OBJECTIVE-Template-para-capas-de-artigo-2024-10-04T141221.252-2048x1030.jpg',
    reading_time_minutes: 5,
    tag_list: ['Career', 'Soft Skills', 'Senior Topic'],
    id: Number(crypto.randomUUID()),
    type_of: ''
  },
  {
    title: 'Unraveling Node.js: Concepts and how it works (Portuguese 🇧🇷)',
    canonical_url: 'https://www.objective.com.br/insights/node-js/',
    cover_image:
      'https://www.objective.com.br/wp-content/uploads/2024/07/OBJECTIVE-Template-para-capas-de-artigo-2024-07-09Tcrypto.randomUUID()43546.756-2048x1030.jpg',
    reading_time_minutes: 4,
    tag_list: ['Node.js', 'Concepts', 'Senior Topic'],
    id: Number(crypto.randomUUID()),
    type_of: ''
  }
]
