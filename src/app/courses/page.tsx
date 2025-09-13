import { Metadata } from 'next'
import { CourseCard } from '@/components/CourseCard'
import { Navbar } from '@/components/Navbar'

export const metadata: Metadata = {
  title: 'All Courses - Course Platform',
  description: 'Browse all available courses and start learning today',
}

// Mock data - in a real app, this would come from your database
const courses = [
  {
    id: '1',
    title: 'Complete Web Development Bootcamp',
    description: 'Learn HTML, CSS, JavaScript, React, Node.js and more in this comprehensive course.',
    price: 99.99,
    imageUrl: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=500&h=300&fit=crop',
    instructor: 'John Doe',
    duration: '40 hours',
    level: 'Beginner',
    students: 1234,
    rating: 4.8,
  },
  {
    id: '2',
    title: 'Advanced React Development',
    description: 'Master React hooks, context, performance optimization, and modern patterns.',
    price: 79.99,
    imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&h=300&fit=crop',
    instructor: 'Jane Smith',
    duration: '25 hours',
    level: 'Advanced',
    students: 856,
    rating: 4.9,
  },
  {
    id: '3',
    title: 'UI/UX Design Fundamentals',
    description: 'Learn design principles, user research, prototyping, and design systems.',
    price: 69.99,
    imageUrl: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=300&fit=crop',
    instructor: 'Mike Johnson',
    duration: '30 hours',
    level: 'Intermediate',
    students: 642,
    rating: 4.7,
  },
  {
    id: '4',
    title: 'Python for Data Science',
    description: 'Master Python programming for data analysis, visualization, and machine learning.',
    price: 89.99,
    imageUrl: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=500&h=300&fit=crop',
    instructor: 'Sarah Wilson',
    duration: '35 hours',
    level: 'Intermediate',
    students: 920,
    rating: 4.8,
  },
  {
    id: '5',
    title: 'Digital Marketing Masterclass',
    description: 'Learn SEO, social media marketing, email marketing, and digital advertising.',
    price: 59.99,
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop',
    instructor: 'David Brown',
    duration: '20 hours',
    level: 'Beginner',
    students: 1567,
    rating: 4.6,
  },
  {
    id: '6',
    title: 'Mobile App Development with Flutter',
    description: 'Build cross-platform mobile apps using Flutter and Dart programming language.',
    price: 94.99,
    imageUrl: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=300&fit=crop',
    instructor: 'Lisa Chen',
    duration: '45 hours',
    level: 'Intermediate',
    students: 743,
    rating: 4.9,
  },
]

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            All Courses
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive collection of courses designed to help you learn new skills and advance your career.
          </p>
        </div>

        {/* Filters Section */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-4 items-center justify-center">
            <button className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700">
              All Courses
            </button>
            <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300">
              Beginner
            </button>
            <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300">
              Intermediate
            </button>
            <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300">
              Advanced
            </button>
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  )
}