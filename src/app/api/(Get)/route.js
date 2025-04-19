import { NextResponse } from "next/server";
const product = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    price: 59.99,
    category: "Electronics",
    description:
      "High-quality wireless headphones with noise cancellation and 20 hours battery life.",
    image: "https://example.com/images/headphones.jpg",
    inStock: true,
    rating: 4.5,
  },
  {
    id: 2,
    name: "Men's Classic Sneakers",
    price: 39.99,
    category: "Footwear",
    description: "Comfortable and stylish sneakers perfect for everyday wear.",
    image: "https://example.com/images/sneakers.jpg",
    inStock: true,
    rating: 4.2,
  },
  {
    id: 3,
    name: "Smart Watch Series 7",
    price: 199.99,
    category: "Electronic",
    description:
      "Feature-rich smartwatch with heart rate monitor, GPS, and more.",
    image: "https://example.com/images/smartwatch.jpg",
    inStock: false,
    rating: 4.7,
  },
  {
    id: 4,
    name: "Cotton T-Shirt (Pack of 3)",
    price: 25.0,
    category: "Clothing",
    description:
      "Soft and breathable cotton t-shirts available in multiple colors.",
    image: "https://example.com/images/tshirt.jpg",
    inStock: true,
    rating: 4.1,
  },
  {
    id: 5,
    name: "Gaming Mouse RGB",
    price: 29.5,
    category: "Electroncs",
    description:
      "Ergonomic gaming mouse with customizable RGB lighting and 6 buttons.",
    image: "https://example.com/images/mouse.jpg",
    inStock: true,
    rating: 4.3,
  },
];

// GET REQUEST
export async function GET(req) {
  return NextResponse.json({ message: "GET REQUEST", product });
}

//POST REQUEST
export async function POST(req) {
  const data = await req.json();
  product.push(data);
  return NextResponse.json({ message: "POST REQUEST", BodyData: data });
}

// PUT REQUEST
export async function PUT(req) {
  const { id, price, name } = await req.json();
  console.log(id, price, name)
  // return NextResponse.json({message:"Send...."})
  const productToUpdate = product.find(p=>p.id === id);

  if (productToUpdate) {
    productToUpdate.price = price;
    productToUpdate.name = name;
    return NextResponse.json({
      message: "PUT REQUEST",
      success:true,
      product: productToUpdate,
    });
  }else{
    return NextResponse.json({ message: "Product not found" });
  }
}
