# AI Hustle Lab Website

This is the official website for AI Hustle Lab, a platform that helps entrepreneurs launch profitable side hustles in a weekend using AI-powered tools and resources.

## Features

- Modern, responsive design with dark theme
- Next.js for server-side rendering and static site generation
- Tailwind CSS for styling
- TypeScript for type safety
- Blog functionality (coming soon)
- User accounts (coming soon)

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/aihustlelab.git
cd aihustlelab
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## Project Structure

```
aihustlelab/
├── public/              # Static assets
├── src/
│   ├── app/             # Next.js app router
│   │   ├── page.tsx     # Homepage
│   │   ├── about/       # About page
│   │   ├── contact/     # Contact page
│   │   └── weekend-hustle-launcher/ # Weekend Hustle Launcher page
│   ├── components/      # Reusable UI components
│   │   ├── common/      # Shared components
│   │   ├── blog/        # Blog-specific components
│   │   ├── layout/      # Layout components
│   │   └── ui/          # Basic UI elements
│   ├── lib/             # Utility functions and shared logic
│   ├── styles/          # Global styles
│   └── types/           # TypeScript type definitions
└── content/             # Blog content (coming soon)
```

## Deployment

The website can be deployed to any hosting platform that supports Next.js, such as Vercel, Netlify, or AWS Amplify.

### Deploying to Vercel

1. Push your code to a GitHub repository.
2. Go to [Vercel](https://vercel.com) and sign up or log in.
3. Click "New Project" and import your GitHub repository.
4. Configure your project settings and click "Deploy".

## Connecting to Your Domain

Once deployed, you can connect your domain (aihustlelab.com) to your hosting provider:

1. Go to your domain registrar (e.g., GoDaddy).
2. Update the DNS settings to point to your hosting provider.
3. Configure SSL/TLS certificates for secure HTTPS connections.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For any questions or feedback, please contact us at hello@aihustlelab.com.
