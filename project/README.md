# ELI5 GPT - Explain Like I'm 5

A stunning AI-powered web application with modern glass morphism design that explains complex topics in simple, kid-friendly language. Perfect for curious minds of all ages!

## ✨ Features

### Core Features
- **AI-Powered Explanations**: Uses OpenAI's GPT-4 to generate simple, engaging explanations
- **Dual Language Support**: English and Bangla (Bengali) language options
- **Story Mode**: Get explanations in fun story format

### Design & UX
- **Glass Morphism Design**: Modern frosted glass effects with backdrop-filter
- **Smooth Animations**: 60fps micro-interactions using Framer Motion
- **Parallax Scrolling**: Engaging depth effects
- **Floating Particles**: Animated background elements
- **Dark/Light Mode**: Beautiful themes with smooth transitions
- **Mobile Responsive**: Seamless experience across all devices
- **Loading States**: Skeleton screens and engaging animations

### Technical Features
- **Rate Limiting**: API protection with request throttling
- **Security Headers**: Comprehensive security middleware
- **Performance Optimized**: GPU-accelerated animations
- **Accessibility**: WCAG compliant with reduced motion support
- **Copy to Clipboard**: Easy sharing of explanations
- **Example Questions**: Quick start with suggested topics

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- OpenAI API key

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/eli5-gpt.git
cd eli5-gpt
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.local.example .env.local
```

Add your OpenAI API key to `.env.local`:
```
OPENAI_API_KEY=your_openai_api_key_here
JWT_SECRET=your_jwt_secret_here
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 13+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI + shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React

### Backend & API
- **API Routes**: Next.js API Routes
- **AI**: OpenAI GPT-4
- **Authentication**: JWT + bcryptjs
- **Rate Limiting**: Custom middleware
- **Security**: Comprehensive headers and validation

### Performance & Optimization
- **CSS**: GPU-accelerated animations
- **Bundle**: Optimized with Next.js
- **Images**: Next.js Image optimization
- **Fonts**: Google Fonts with preconnect

## 📱 Usage

1. **Ask a Question**: Type any question you want explained
2. **Choose Language**: Select English or Bangla
3. **Pick Mode**: Simple explanation or story mode
4. **Get Answer**: Receive a kid-friendly explanation
5. **Copy & Share**: Copy the explanation to share with others

## 🎨 Design System

### Glass Morphism
- **Background**: `rgba(255, 255, 255, 0.1)` with `backdrop-filter: blur(20px)`
- **Borders**: Semi-transparent with `rgba(255, 255, 255, 0.2)`
- **Shadows**: Layered box-shadows for depth

### Animation System
- **Transitions**: `cubic-bezier(0.4, 0, 0.2, 1)` for smooth easing
- **Micro-interactions**: Scale and opacity transforms
- **Performance**: GPU-accelerated with `transform3d(0,0,0)`

### Color Palette
- **Primary**: Blue to purple gradients
- **Secondary**: Pink to red gradients  
- **Accent**: Cyan to blue gradients
- **Glass**: Semi-transparent whites and blacks

### Responsive Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔒 Security Features

- **Rate Limiting**: 10 requests per minute per IP
- **Security Headers**: CSP, X-Frame-Options, etc.
- **Input Validation**: Server-side validation for all inputs
- **JWT Authentication**: Secure token-based auth
- **Password Hashing**: bcryptjs with salt rounds

## ⚡ Performance Optimizations

- **GPU Acceleration**: All animations use transform3d
- **Code Splitting**: Automatic with Next.js
- **Image Optimization**: Next.js Image component
- **Font Loading**: Preconnect and font-display: swap
- **Bundle Analysis**: Optimized imports and tree shaking

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add your environment variables in Vercel dashboard
4. Deploy!

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- Heroku
- AWS
- Google Cloud

## 🧪 Testing

```bash
# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Run e2e tests
npm run test:e2e
```

## 📊 Monitoring & Analytics

- **Error Tracking**: Built-in error boundaries
- **Performance**: Web Vitals monitoring
- **Usage Analytics**: Optional analytics integration
- **API Monitoring**: Request/response logging

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### Development Guidelines

1. **Code Style**: Follow ESLint and Prettier configurations
2. **Commits**: Use conventional commit messages
3. **Testing**: Add tests for new features
4. **Documentation**: Update README for significant changes

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- OpenAI for the amazing GPT-4 API
- Vercel for the excellent deployment platform
- Framer Motion for smooth animations
- Radix UI for accessible components
- The open-source community for the amazing tools and libraries

---

**Made with ❤️ and modern web technologies to help curious minds learn**