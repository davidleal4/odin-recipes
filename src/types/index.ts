export interface Course {
  id: string
  title: string
  description: string
  price: number
  imageUrl: string
  instructor: string
  duration: string
  level: 'Beginner' | 'Intermediate' | 'Advanced'
  students: number
  rating: number
  lessonsCount?: number
  certificate?: boolean
  skills?: string[]
  curriculum?: CourseSection[]
  isPublished?: boolean
}

export interface CourseSection {
  title: string
  lessons: string[]
}

export interface User {
  id: string
  email: string
  name?: string
  image?: string
  role: 'STUDENT' | 'INSTRUCTOR' | 'ADMIN'
  createdAt: Date
  updatedAt: Date
}

export interface Enrollment {
  id: string
  userId: string
  courseId: string
  createdAt: Date
}

export interface Purchase {
  id: string
  userId: string
  courseId: string
  amount: number
  stripePaymentIntentId?: string
  createdAt: Date
}