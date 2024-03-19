import { NextRequest, NextResponse } from 'next/server'

export interface IProductListProps {
  id: number
  sku: string
  imgUrl: string
  title: string
  price: {
    value: number
    currency: string
  }
  describe: string
  specificities: string[]
}

const productList: IProductListProps[] = [
  {
    id: 1,
    sku: 'roadster-classic',
    imgUrl: 'http://localhost:3000/daniel-salcius-RRcYcdGY630-unsplash.jpg',
    title: 'Roadster Classic',
    price: {
      value: 899.0,
      currency: 'GBP'
    },
    describe:
      'The Roadster Classic is a timeless beauty that combines vintage design with modern technology. Its sturdy frame and comfortable seating make it perfect for long rides. With its smooth gears and reliable brakes, it offers a delightful riding experience.',
    specificities: [
      'Vintage design',
      'Sturdy frame',
      'Comfortable seating',
      'Smooth gears',
      'Reliable brakes'
    ]
  },
  {
    id: 2,
    sku: 'mountain-explorer',
    imgUrl: 'http://localhost:3000/alessio-soggetti-HPpj2190tGs-unsplash.jpg',
    title: 'Mountain Explorer',
    price: {
      value: 1299.0,
      currency: 'GBP'
    },
    describe: `The Roadster Classic is a timeless beauty that combines vintage design with modern technology. Its sturdy frame and comfortable seating make it perfect for long rides. With its smooth gears and reliable brakes, it offers a delightful riding experience.`,
    specificities: ['Rugged construction', 'Powerful suspension', 'Versatile for any terrain']
  },
  {
    id: 3,
    sku: 'roadster-sport',
    imgUrl: 'http://localhost:3000/david-jones-IYU2eCw9iek-unsplash.jpg',
    title: 'Roadster Sport',
    price: {
      value: 1199.0,
      currency: 'GBP'
    },
    describe: `The Roadster Sport is designed for speed enthusiasts. Its lightweight frame and aerodynamic design make it perfect for zipping through city streets. With its responsive handling and efficient drivetrain, you'll enjoy a thrilling ride every time you hop on this bike.`,
    specificities: [
      'Lightweight frame',
      'Aerodynamic design',
      'Responsive handling',
      'Efficient drivetrain'
    ]
  }
]

export async function GET(request: NextRequest, { params }: { params: { sku: string } }) {
  const product = productList.find(i => i.sku === params.sku)
  return NextResponse.json({ data: product })
}
