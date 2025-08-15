# Cold AI Landing Page

A beautiful, animated landing page for Cold AI - a LinkedIn outreach automation platform.

## 🚀 Features

- **Beautiful Animations**: Powered by Magic UI components including flickering grid backgrounds, text animations, and shimmer buttons
- **Email Registration**: Integrated with Supabase for collecting interested user emails
- **Responsive Design**: Fully responsive and works on all devices
- **Modern Stack**: Built with React, TypeScript, Vite, and Tailwind CSS

## 🛠️ Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Motion (Framer Motion)
- **Database**: Supabase
- **Icons**: Lucide React
- **Notifications**: Sonner

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/Nudge-AI-UK/coldai-landing.git
cd coldai-landing
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

4. Add your Supabase credentials to `.env`:
```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## 🏃‍♂️ Development

Run the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

## 🏗️ Build

Build for production:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## 📊 Database Setup

The landing page uses a Supabase table called `landing_interest` to store email registrations. The table structure is:

```sql
CREATE TABLE public.landing_interest (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  source TEXT DEFAULT 'coldai.uk',
  ip_address TEXT,
  user_agent TEXT,
  referrer TEXT
);
```

Row Level Security (RLS) policies are set up to:
- Allow anyone to insert their email
- Only allow authenticated users to view registrations

## 🚀 Deployment

### Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Nudge-AI-UK/coldai-landing)

### Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/Nudge-AI-UK/coldai-landing)

### Manual Deployment

1. Build the project: `npm run build`
2. Deploy the `dist` folder to your hosting provider
3. Set up environment variables on your hosting platform

## 📝 License

MIT License - feel free to use this project for your own purposes.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Contact

For any questions about Cold AI, visit [coldai.uk](https://coldai.uk)