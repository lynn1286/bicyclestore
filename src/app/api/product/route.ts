import { defaultLocale } from '@/config'
import { getTranslations } from 'next-intl/server'
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
  deliveryDate: number
}

export const productList: IProductListProps[] = [
  {
    id: 1,
    sku: 'roadster-classic',
    imgUrl: 'http://localhost:3000/daniel-salcius-RRcYcdGY630-unsplash.jpg',
    title: 'Roadster Classic',
    price: {
      value: 899.0,
      currency: 'USD'
    },
    describe:
      'The Roadster Classic is a timeless beauty that combines vintage design with modern technology. Its sturdy frame and comfortable seating make it perfect for long rides. With its smooth gears and reliable brakes, it offers a delightful riding experience.',
    specificities: [
      'Vintage design',
      'Sturdy frame',
      'Comfortable seating',
      'Smooth gears',
      'Reliable brakes'
    ],
    deliveryDate: 1716076800000
  },
  {
    id: 2,
    sku: 'mountain-explorer',
    imgUrl: 'http://localhost:3000/alessio-soggetti-HPpj2190tGs-unsplash.jpg',
    title: 'Mountain Explorer',
    price: {
      value: 1299.0,
      currency: 'USD'
    },
    describe: `The Mountain Explorer is built for adventure seekers. Its rugged construction and powerful suspension allow you to conquer any terrain with ease. Whether you're tackling steep hills or navigating through rocky trails, this bike will be your reliable companion.`,
    specificities: ['Rugged construction', 'Powerful suspension', 'Versatile for any terrain'],
    deliveryDate: 1716076800000
  },
  {
    id: 3,
    sku: 'roadster-sport',
    imgUrl: 'http://localhost:3000/david-jones-IYU2eCw9iek-unsplash.jpg',
    title: 'Roadster Sport',
    price: {
      value: 1199.0,
      currency: 'USD'
    },
    describe: `The Roadster Sport is designed for speed enthusiasts. Its lightweight frame and aerodynamic design make it perfect for zipping through city streets. With its responsive handling and efficient drivetrain, you'll enjoy a thrilling ride every time you hop on this bike.`,
    specificities: [
      'Lightweight frame',
      'Aerodynamic design',
      'Responsive handling',
      'Efficient drivetrain'
    ],
    deliveryDate: 1716076800000
  }
]

export const productListZh: IProductListProps[] = [
  {
    id: 1,
    sku: 'roadster-classic',
    imgUrl: 'http://localhost:3000/daniel-salcius-RRcYcdGY630-unsplash.jpg',
    title: 'Roadster Classic',
    price: {
      value: 899.0,
      currency: 'RMB'
    },
    describe:
      'Roadster Classic 是一款将复古设计与现代技术相结合的永恒之美。它拥有坚固的车架和舒适的座椅，非常适合长途骑行。平稳的齿轮和可靠的制动器为您带来愉悦的骑行体验。',
    specificities: ['复古设计', '坚固的框架', '舒适的座椅', '平滑齿轮', '可靠的制动器'],
    deliveryDate: 1716076800000
  },
  {
    id: 2,
    sku: 'mountain-explorer',
    imgUrl: 'http://localhost:3000/alessio-soggetti-HPpj2190tGs-unsplash.jpg',
    title: 'Mountain Explorer',
    price: {
      value: 1299.0,
      currency: 'RMB'
    },
    describe: `Mountain Explorer 专为探险者打造。其坚固的结构和强劲的悬挂系统可让您轻松征服任何地形。无论您是在陡峭的山路上骑行，还是在多石的山路上穿行，这款自行车都将是您可靠的伙伴。`,
    specificities: ['坚固的结构', '强大的悬挂系统', '适用于任何地形'],
    deliveryDate: 1716076800000
  },
  {
    id: 3,
    sku: 'roadster-sport',
    imgUrl: 'http://localhost:3000/david-jones-IYU2eCw9iek-unsplash.jpg',
    title: 'Roadster Sport',
    price: {
      value: 1199.0,
      currency: 'RMB'
    },
    describe: `Roadster Sport 专为速度爱好者设计。其轻质车架和空气动力学设计使其成为在城市道路上飞驰的完美选择。凭借其灵敏的操控性和高效的传动系统，每次骑上这辆自行车，您都会享受到惊险刺激的骑行体验。`,
    specificities: ['轻质框架', '空气动力设计', '反应灵敏', '高效传动系统'],
    deliveryDate: 1716076800000
  }
]

export async function GET(request: NextRequest, { params }: { params: { sku: string } }) {
  const locale = request.nextUrl.searchParams.get('locale') || defaultLocale
  const t = await getTranslations({ locale, namespace: 'Home' })

  if (locale === 'zh') {
    return NextResponse.json({ data: productListZh })
  }

  return NextResponse.json({ data: productList })
}
