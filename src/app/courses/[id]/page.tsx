import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Navbar } from '@/components/Navbar'
import { Star, Clock, Users, PlayCircle, BookOpen, Award } from 'lucide-react'

interface CoursePageProps {
  params: {
    id: string
  }
}

// Mock course data - in a real app, this would be fetched from the database
const getCourse = (id: string) => {
  const courses = {
    '1': {
      id: '1',
      title: 'Complete Web Development Bootcamp',
      description: 'Learn HTML, CSS, JavaScript, React, Node.js and more in this comprehensive course. Build real-world projects and get job-ready skills.',
      price: 99.99,
      imageUrl: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=800&h=400&fit=crop',
      instructor: 'John Doe',
      duration: '40 hours',
      level: 'Beginner',
      students: 1234,
      rating: 4.8,
      lessonsCount: 45,
      certificate: true,
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'MongoDB'],
      curriculum: [
        {
          title: 'Introduction to Web Development',
          lessons: ['What is Web Development?', 'Setting up your environment', 'First HTML page'],
        },
        {
          title: 'HTML Fundamentals',
          lessons: ['HTML structure', 'Common HTML elements', 'Forms and inputs'],
        },
        {
          title: 'CSS Styling',
          lessons: ['CSS basics', 'Flexbox and Grid', 'Responsive design'],
        },
        {
          title: 'JavaScript Programming',
          lessons: ['Variables and functions', 'DOM manipulation', 'Events and APIs'],
        },
        {
          title: 'React Framework',
          lessons: ['React components', 'State and props', 'Hooks and routing'],
        },
      ],
    },
    '2': {
      id: '2',
      title: 'Advanced React Development',
      description: 'Master React hooks, context, performance optimization, and modern patterns.',
      price: 79.99,
      imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop',
      instructor: 'Jane Smith',
      duration: '25 hours',
      level: 'Advanced',
      students: 856,
      rating: 4.9,
      lessonsCount: 32,
      certificate: true,
      skills: ['React Hooks', 'Context API', 'Performance', 'Testing'],
      curriculum: [
        {
          title: 'Advanced Hooks',
          lessons: ['useReducer', 'useCallback', 'useMemo', 'Custom hooks'],
        },
        {
          title: 'State Management',
          lessons: ['Context API', 'Redux Toolkit', 'Zustand'],
        },
      ],
    },
  }
  
  return courses[id as keyof typeof courses] || null
}

export default function CoursePage({ params }: CoursePageProps) {
  const course = getCourse(params.id)

  if (!course) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Course not found</h1>
          <p className="text-gray-600">The course you're looking for doesn't exist.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm">
                  {course.level}
                </span>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-yellow-400">{course.rating}</span>
                  <span className="text-gray-300">({course.students} students)</span>
                </div>
              </div>
              
              <h1 className="text-4xl font-bold mb-6">{course.title}</h1>
              <p className="text-xl text-gray-300 mb-8">{course.description}</p>
              
              <div className="flex items-center gap-6 mb-8 text-gray-300">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <PlayCircle className="h-5 w-5" />
                  <span>{course.lessonsCount} lessons</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  <span>{course.students.toLocaleString()} students</span>
                </div>
              </div>
              
              <p className="text-gray-300 mb-2">Created by</p>
              <p className="text-xl font-semibold">{course.instructor}</p>
            </div>
            
            <div className="relative">
              <Image
                src={course.imageUrl}
                alt={course.title}
                width={600}
                height={300}
                className="rounded-lg shadow-xl"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Button size="lg" className="bg-white text-primary-600 hover:bg-gray-100">
                  <PlayCircle className="mr-2 h-6 w-6" />
                  Preview Course
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* What you'll learn */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">What you'll learn</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {course.skills.map((skill, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <BookOpen className="h-5 w-5 text-primary-600" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Course curriculum */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Course curriculum</h2>
              <div className="space-y-4">
                {course.curriculum.map((section, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-sm border">
                    <div className="p-6">
                      <h3 className="text-lg font-semibold mb-3">{section.title}</h3>
                      <div className="space-y-2">
                        {section.lessons.map((lesson, lessonIndex) => (
                          <div key={lessonIndex} className="flex items-center gap-3 text-gray-600">
                            <PlayCircle className="h-4 w-4" />
                            <span>{lesson}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-8">
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-primary-600 mb-2">
                  ${course.price}
                </div>
                <p className="text-gray-600">One-time purchase</p>
              </div>
              
              <Button className="w-full mb-4" size="lg">
                Enroll Now
              </Button>
              
              <div className="text-center mb-6">
                <p className="text-sm text-gray-600">30-day money-back guarantee</p>
              </div>
              
              <div className="space-y-4 text-sm">
                <div className="flex items-center justify-between">
                  <span>Duration</span>
                  <span className="font-medium">{course.duration}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Lessons</span>
                  <span className="font-medium">{course.lessonsCount}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Level</span>
                  <span className="font-medium">{course.level}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Certificate</span>
                  <div className="flex items-center gap-1">
                    <Award className="h-4 w-4 text-primary-600" />
                    <span className="font-medium">Yes</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}