export interface Review {
  name: string
  country: string
  content: string
}

export interface Workshop {
  title: string
  date: string
  time: string
  description: string
}

export interface Tutor {
  id: number
  name: string
  flag: string
  accent: string
  experience: string
  language: string
  image: string
  video?: string
  about?: string
  skills?: string[]
  reviews?: Review[]
  availability?: { [date: string]: string[] }
  workshops?: Workshop[]
  levels?: string[]
}