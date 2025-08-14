import { NextResponse } from "next/server";
const PRODUCTS = [
  { id: 1, name: "Starter Plan", price: 199.0 },
  { id: 2, name: "Pro Plan", price: 499.0 },
  { id: 3, name: "Enterprise Plan", price: 999.0 }
];
export async function GET() {
  await new Promise(r => setTimeout(r, 150));
  return NextResponse.json(PRODUCTS);
}
