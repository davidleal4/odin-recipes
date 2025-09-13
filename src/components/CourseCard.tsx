import Image from 'next/image'
import Link from 'next/link'
import { Star, Clock, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface Course {
  id: string
  title: string
  description: string
  price: number
  imageUrl: string
  instructor: string
  duration: string
  level: string
  students: number
  rating: number
}

interface CourseCardProps {
  course: Course
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48">
        <Image
          src={course.imageUrl}
          alt={course.title}
          fill
          className="object-cover"
        />
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
            {course.level}
          </span>
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm text-gray-600">{course.rating}</span>
          </div>
        </div>
        
        <h3 className="text-lg font-semibold mb-2 line-clamp-2">
          {course.title}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {course.description}
        </p>
        
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            <span>{course.students.toLocaleString()}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">by {course.instructor}</p>
            <p className="text-2xl font-bold text-primary-600">
              ${course.price}
            </p>
          </div>
          
          <Link href={`/courses/${course.id}`}>
            <Button>
              View Course
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}