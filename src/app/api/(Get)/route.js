import { NextResponse } from "next/server";
const product = [
  {
    "id": "p001",
    "name": "Wireless Bluetooth Headphones",
    "price": 59.99,
    "category": "Electronics",
    "description": "High-quality wireless headphones with noise cancellation and 20 hours battery life.",
    "image": "https://example.com/images/headphones.jpg",
    "inStock": true,
    "rating": 4.5
  },
  {
    "id": "p002",
    "name": "Men's Classic Sneakers",
    "price": 39.99,
    "category": "Footwear",
    "description": "Comfortable and stylish sneakers perfect for everyday wear.",
    "image": "https://example.com/images/sneakers.jpg",
    "inStock": true,
    "rating": 4.2
  },
  {
    "id": "p003",
    "name": "Smart Watch Series 7",
    "price": 199.99,
    "category": "Electronics",
    "description": "Feature-rich smartwatch with heart rate monitor, GPS, and more.",
    "image": "https://example.com/images/smartwatch.jpg",
    "inStock": false,
    "rating": 4.7
  },
  {
    "id": "p004",
    "name": "Cotton T-Shirt (Pack of 3)",
    "price": 25.0,
    "category": "Clothing",
    "description": "Soft and breathable cotton t-shirts available in multiple colors.",
    "image": "https://example.com/images/tshirt.jpg",
    "inStock": true,
    "rating": 4.1
  },
  {
    "id": "p005",
    "name": "Gaming Mouse RGB",
    "price": 29.5,
    "category": "Electronics",
    "description": "Ergonomic gaming mouse with customizable RGB lighting and 6 buttons.",
    "image": "https://example.com/images/mouse.jpg",
    "inStock": true,
    "rating": 4.3
  }
]


export async function GET(req) {
    return NextResponse.json({ message: 'Learn Get Request', product });
}
