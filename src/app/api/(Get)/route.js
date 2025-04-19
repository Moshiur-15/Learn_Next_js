import { NextResponse } from "next/server";
let product = [
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
// export async function PUT(req) {
//   const { searchParams } = req.nextUrl;
//   const id = parseInt(searchParams.get("id"));

//   const productToUpdate = await req.json();

//   for(let i=0; i<product.length; i++){
//     if(product[i].id == id){
//       product[i].category = productToUpdate.category;
//       product[i].description = productToUpdate.description;
//       product[i].image = productToUpdate.image;
//       product[i].inStock = productToUpdate.inStock;
//       product[i].rating = productToUpdate.rating;
//     }
//   }
//   // const products = productToUpdate.find((p) => p.id === id);
//   return NextResponse.json({
//     message: "PUT REQUEST",
//     success: true,
//     product
//   });
// }

export async function PUT(req) {
  const { searchParams } = req.nextUrl;
  const id = parseInt(searchParams.get("id"));//delete id
  const updatedData = await req.json(); //user update data

  const productToUpdate = product.find(p => p.id === id);

  if (productToUpdate) {
    productToUpdate.category = updatedData.category || productToUpdate.category;
    productToUpdate.description = updatedData.description || productToUpdate.description;
    productToUpdate.image = updatedData.image || productToUpdate.image;
    productToUpdate.inStock = updatedData.inStock !== undefined ? updatedData.inStock : productToUpdate.inStock;
    productToUpdate.rating = updatedData.rating || productToUpdate.rating;

    return NextResponse.json({
      message: "PRODUCT UPDATED SUCCESSFULLY",
      success: true,
      updatedProduct: productToUpdate, 
    });
  } else {
    return NextResponse.json({
      message: "PRODUCT NOT FOUND",
      success: false,
    }, { status: 404 });
  }
}


// DELATE REQUEST
export async function DELETE(req) {
  const { searchParams } = req.nextUrl;
  const id = parseInt(searchParams.get("id"));
  console.log(id)
  product = product.filter(p=>p.id !== id);
  return NextResponse.json({
    message: "DELETE REQUEST",
    success:true,
    product
  })
}