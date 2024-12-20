import { ImageResponse } from "next/og";

export const runtime = "edge";

// Instead of using request.url, we'll use generateStaticParams and dynamic segments
export async function generateStaticParams() {
  return [{ title: "Portfolio" }];
}

export async function GET() {
  return new ImageResponse(
    (
      <div tw="flex flex-col w-full h-full items-center justify-center bg-white">
        <div tw="flex flex-col md:flex-row w-full py-12 px-4 md:items-center justify-between p-8">
          <h2 tw="flex flex-col text-4xl font-bold tracking-tight text-left">
            Portfolio
          </h2>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
