import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { slug } = params;

  return NextResponse.json({
    message: `Product details for slug: ${slug}`,
    slug,
  });
}


export async function POST(request, { params }) {
  const { slug } = params;
  const body = await request.json();

  return NextResponse.json({
    message: `Created product with slug: ${slug}`,
    slug,
    data: body,
  });
}


export async function PUT(request, { params }) {
  const { slug } = params;
  const body = await request.json();

  return NextResponse.json({
    message: `Updated product with slug: ${slug}`,
    slug,
    data: body,
  });
}


export async function DELETE(request, { params }) {
  const { slug } = params;

  return NextResponse.json({
    message: `Deleted product with slug: ${slug}`,
    slug,
  });
}
