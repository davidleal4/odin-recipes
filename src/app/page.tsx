import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { BookOpen, Users, Award, ArrowRight } from 'lucide-react'
import { CourseCard } from '@/components/CourseCard'
import { Navbar } from '@/components/Navbar'

export default function HomePage() {
  const featuredCourses = [
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
  ]

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              Learn Skills That Matter
            </h1>
            <p className="text-xl mb-8 text-primary-100">
              Join thousands of learners in our comprehensive online courses. 
              Build your skills, advance your career, and achieve your goals.
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary-600 hover:bg-gray-100">
                Browse Courses
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-600">
                Start Teaching
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose Our Platform?</h2>
            <p className="text-gray-600 text-lg">Experience learning like never before</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Expert-Led Courses</h3>
              <p className="text-gray-600">
                Learn from industry professionals with years of real-world experience.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Community Support</h3>
              <p className="text-gray-600">
                Connect with fellow learners and get help when you need it most.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Certificates</h3>
              <p className="text-gray-600">
                Earn recognized certificates to showcase your new skills to employers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Featured Courses</h2>
            <p className="text-gray-600 text-lg">Start your learning journey with these popular courses</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/courses">
              <Button size="lg">
                View All Courses
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Learning?</h2>
          <p className="text-xl mb-8 text-secondary-100">
            Join our community of learners and unlock your potential today.
          </p>
          <Link href="/signup">
            <Button size="lg" className="bg-white text-secondary-600 hover:bg-gray-100">
              Get Started for Free
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}