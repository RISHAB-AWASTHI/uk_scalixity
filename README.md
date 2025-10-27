# UK Scalixity

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Components

### Resources Component

The Resources component (`/src/app/components/resources.tsx`) provides a downloadable resources section with PDF access control:

- **View Resource**: Opens a popup contact form before accessing PDFs
- **Download**: Direct download without form requirement
- **Session tracking**: Once the form is submitted, users can access all PDFs without repeating the form
- **Responsive design**: Matches the UI styling of other components

#### Features:
- Interactive resource cards with hover effects
- Gradient backgrounds and modern UI design
- Form submission tracking via sessionStorage
- Automatic PDF opening after form submission

#### PDF Files:
Add PDF files to `/public/resources/`:
- `scalixity-tech-guide-2024.pdf`
- `ai-ml-framework.pdf`
- `cloud-migration-handbook.pdf`
- `devops-best-practices.pdf`

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
