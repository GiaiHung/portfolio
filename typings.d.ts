interface SanityBody {
  _createdAt: string
  _rev: string
  _id: string
  _updatedAt: string
}

interface Image {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
}

interface Social extends SanityBody {
  _type: 'social'
  title: string
  url: string
}

interface PageInfo extends SanityBody {
  _type: 'pageInfo'
  address: string
  backgroundInformation: string
  email: string
  heroImage: Image
  name: string
  role: string
  phoneNumber: string
  profilePic: Image
}

interface Skill extends SanityBody {
  _type: 'skill'
  image: Image
  progress: number
  title: string
}

interface Project extends SanityBody {
  title: string
  _type: 'project'
  image: Image
  linkToBuild: string
  summary: string
  technologies: Skill[]
  demo: boolean
}

interface Experience {
  _type: 'experience'
  company: string
  companyImage: Image
  dateStarted: date
  dateEnded: date
  isCurrentlyWorkingHere: boolean
  jobTitle: string
  points: string[]
  technologies: Skill[]
}

interface Post extends SanityBody {
  title: string
  description: string
  author: Author
  slug: {
    _type: string
    current: string
  }
  categories: Category[]
  body: object[]
  mainImage: Image
  comment: CommentProps[]
} 

interface Category {
  title: string
  description: string
  slug: {
    _type: string
    current: string
  }
}

interface Author extends SanityBody {
  name: string
  image: string
  bio: any[]
}

interface CommentProps extends SanityBody {
  comment: string
  email: string
  name: string
  image: string
}