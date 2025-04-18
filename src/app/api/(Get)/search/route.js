import { NextResponse } from "next/server";
const product = [
    {
      "id": 1,
      "name": "Wireless Bluetooth Headphones",
      "price": 59.99,
      "category": "Electronics",
      "description": "High-quality wireless headphones with noise cancellation and 20 hours battery life.",
      "image": "https://example.com/images/headphones.jpg",
      "inStock": true,
      "rating": 4.5
    },
    {
      "id": 2,
      "name": "Men's Classic Sneakers",
      "price": 39.99,
      "category": "Footwear",
      "description": "Comfortable and stylish sneakers perfect for everyday wear.",
      "image": "https://example.com/images/sneakers.jpg",
      "inStock": true,
      "rating": 4.2
    },
    {
      "id": 3,
      "name": "Smart Watch Series 7",
      "price": 199.99,
      "category": "Electronic",
      "description": "Feature-rich smartwatch with heart rate monitor, GPS, and more.",
      "image": "https://example.com/images/smartwatch.jpg",
      "inStock": false,
      "rating": 4.7
    },
    {
      "id": 4,
      "name": "Cotton T-Shirt (Pack of 3)",
      "price": 25.0,
      "category": "Clothing",
      "description": "Soft and breathable cotton t-shirts available in multiple colors.",
      "image": "https://example.com/images/tshirt.jpg",
      "inStock": true,
      "rating": 4.1
    },
    {
      "id": 5,
      "name": "Gaming Mouse RGB",
      "price": 29.5,
      "category": "Electroncs",
      "description": "Ergonomic gaming mouse with customizable RGB lighting and 6 buttons.",
      "image": "https://example.com/images/mouse.jpg",
      "inStock": true,
      "rating": 4.3
    }
  ]
  
  

// single Get REQUEST

export async function GET(req) {
  const { searchParams } = req.nextUrl;
  const category = searchParams.get("category");
  const price = parseFloat(searchParams.get("price"));

    let categorySearch = [];
    let priceSearch = [];
  
  if (category) {
    categorySearch = product.filter((p) =>
      p.category.toLowerCase().includes(category.toLowerCase())
    );
  }

  if (price) {
    priceSearch = product.filter((p) => p.price === price);
  }

  if (categorySearch.length === 0 && priceSearch.length === 0) {
    return NextResponse.json({ message: "NO QUERY DATA FOUND"});
  }


  return NextResponse.json({
    message: "single Get Request",
    search: { categorySearch, priceSearch },
  });
}
