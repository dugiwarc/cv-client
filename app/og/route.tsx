import { ImageResponse } from 'next/og'

export async function generateStaticParams() {
  return [
    { title: 'Next.js Portfolio Starter' },
    // Add any other titles you want to pre-generate
  ]
}

export function GET(request: Request) {
  // Get the title from the URL or use default
  const title = new URL(request.url).searchParams.get('title') || 'Next.js Portfolio Starter'
  
  return new ImageResponse(
    (
      <div tw="flex flex-col w-full h-full items-center justify-center bg-white">
        <div tw="flex flex-col md:flex-row w-full py-12 px-4 md:items-center justify-between p-8">
          <h2 tw="flex flex-col text-4xl font-bold tracking-tight text-left">
            {title}
          </h2>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
