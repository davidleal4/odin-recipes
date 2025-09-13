import { NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-11-20.acacia',
})

export async function POST(request: Request) {
  try {
    const { courseId, userId } = await request.json()

    if (!courseId || !userId) {
      return new NextResponse('Missing required fields', { status: 400 })
    }

    // In a real app, fetch course details from database
    const course = {
      id: courseId,
      title: 'Sample Course',
      price: 99.99,
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(course.price * 100), // Convert to cents
      currency: 'usd',
      metadata: {
        courseId,
        userId,
      },
    })

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
    })
  } catch (error) {
    console.error('[STRIPE_PAYMENT_INTENT]', error)
    return new NextResponse('Internal Error', { status: 500 })
  }
}