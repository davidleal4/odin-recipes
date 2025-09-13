import { NextResponse } from 'next/server'

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
    isPublished: true,
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
    isPublished: true,
  },
  // Add more mock courses as needed
]

export async function GET() {
  try {
    return NextResponse.json(courses)
  } catch (error) {
    console.error('[COURSES_GET]', error)
    return new NextResponse('Internal Error', { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    // In a real app, you would:
    // 1. Validate the request body
    // 2. Check user authentication
    // 3. Save to database
    // 4. Return the created course
    
    const newCourse = {
      id: Date.now().toString(),
      ...body,
      students: 0,
      rating: 0,
      isPublished: false,
    }
    
    return NextResponse.json(newCourse)
  } catch (error) {
    console.error('[COURSES_POST]', error)
    return new NextResponse('Internal Error', { status: 500 })
  }
}