# Course Platform

A comprehensive full-stack course selling platform built with Next.js, TypeScript, and modern web technologies.

## Features

- 🎓 **Course Management**: Browse, search, and purchase courses
- 👤 **User Authentication**: Secure login/signup with role-based access
- 💳 **Payment Integration**: Stripe payment processing for course purchases
- 📱 **Responsive Design**: Mobile-first design with Tailwind CSS
- 🎯 **Course Progress**: Track learning progress and achievements
- 🏆 **Certificates**: Earn certificates upon course completion
- 👨‍🏫 **Instructor Dashboard**: Create and manage courses
- 📊 **Analytics**: Course statistics and student engagement metrics

## Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Modern icon library
- **React Hook Form** - Form handling and validation

### Backend
- **Next.js API Routes** - Serverless API endpoints
- **Prisma** - Type-safe database ORM
- **PostgreSQL** - Primary database
- **NextAuth.js** - Authentication system
- **Stripe** - Payment processing

### Development
- **ESLint** - Code linting
- **TypeScript** - Static type checking
- **Prisma Studio** - Database management GUI

## Getting Started

### Prerequisites
- Node.js 18+ 
- PostgreSQL database
- Stripe account for payments

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd odin-recipes
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

Edit `.env` with your actual values:
```env
DATABASE_URL="postgresql://username:password@localhost:5432/course_platform"
NEXTAUTH_SECRET="your-secret-here"
NEXTAUTH_URL="http://localhost:3000"
STRIPE_PUBLISHABLE_KEY="pk_test_..."
STRIPE_SECRET_KEY="sk_test_..."
STRIPE_WEBHOOK_SECRET="whsec_..."
```

4. Set up the database:
```bash
npx prisma generate
npx prisma db push
```

5. Start the development server:
```bash
npm run dev
```

Visit `http://localhost:3000` to see the application.

## Project Structure

```
src/
├── app/                 # Next.js App Router pages
│   ├── api/            # API routes
│   ├── courses/        # Course-related pages
│   ├── login/          # Authentication pages
│   └── signup/
├── components/          # Reusable React components
│   ├── ui/             # UI components
│   └── providers/      # Context providers
├── lib/                # Utility libraries
├── types/              # TypeScript type definitions
└── utils/              # Helper functions
```

## Key Features

### Course Management
- Browse comprehensive course catalog
- Detailed course pages with curriculum
- Filter courses by level, category, and price
- Course reviews and ratings

### User Authentication
- Email/password authentication
- Google OAuth integration
- Role-based access (Student, Instructor, Admin)
- Secure session management

### Payment Processing
- Stripe integration for secure payments
- One-time course purchases
- Payment history and receipts
- Refund handling

### Learning Experience
- Progress tracking per course
- Video lessons and downloadable resources
- Interactive course materials
- Certificate generation

## API Endpoints

### Courses
- `GET /api/courses` - List all courses
- `POST /api/courses` - Create new course (instructor only)
- `GET /api/courses/[id]` - Get course details
- `PUT /api/courses/[id]` - Update course

### Payments
- `POST /api/stripe/payment-intent` - Create payment intent
- `POST /api/stripe/webhook` - Handle Stripe webhooks

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically on push

### Manual Deployment
1. Build the application:
```bash
npm run build
```

2. Start production server:
```bash
npm start
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support and questions, please open an issue on GitHub or contact the development team.