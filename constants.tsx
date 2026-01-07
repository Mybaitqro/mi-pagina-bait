import { Product, Plan, Phone, Location } from './types';

export const LOGO_URL = "https://mibait.com/wp-content/uploads/2023/05/Logo-BAIT-1.png";

export const CONNECTIVITY_PRODUCTS: Product[] = [
  {
    id: 'sim-fisica',
    name: 'SIM Física Bait',
    description: 'Chip con cobertura nacional 4.5G y redes sociales incluidas.',
    price: 100,
    type: 'SIM'
  },
  {
    id: 'esim-virtual',
    name: 'eSIM Bait',
    description: 'Activación digital inmediata. Sin necesidad de chip físico.',
    price: 100,
    type: 'ESIM'
  }
];

export const PLANS: Plan[] = [
  {
    id: 'plan-100',
    name: 'Bait $100',
    description: 'El favorito de todos.',
    price: 100,
    type: 'PLAN',
    validity: '15 DÍAS',
    data: '10GB',
    features: ['Redes Sociales Ilimitadas', 'Minutos y SMS ilimitados', 'Hotspot incluido'],
    isPopular: true
  },
  {
    id: 'plan-200',
    name: 'Bait $200',
    description: 'Navega sin preocupaciones.',
    price: 200,
    type: 'PLAN',
    validity: '30 DÍAS',
    data: '20GB',
    features: ['Redes Sociales Ilimitadas', 'Llamadas USA/CAN', 'Hotspot incluido']
  },
  {
    id: 'plan-300',
    name: 'Bait $300',
    description: 'Máxima potencia mensual.',
    price: 300,
    type: 'PLAN',
    validity: '30 DÍAS',
    data: '30GB',
    features: ['Todo Ilimitado', 'Llamadas USA/CAN', 'Ideal para video HD']
  }
];

export const PHONES: Phone[] = [
  {
    id: 'iphone-15',
    name: 'iPhone 15',
    model: 'iPhone 15 128GB',
    brand: 'Apple',
    description: 'Cámara Pro y el mejor rendimiento con red Bait.',
    price: 18499,
    type: 'PHONE',
    image: 'https://cdn.shopify.com/s/files/1/0616/4384/9963/files/iphone-15-black.png?v=1701358364',
    specs: ['Pantalla 6.1"', 'Cámara 48MP', 'A16 Bionic']
  },
  {
    id: 'samsung-s24',
    name: 'Samsung S24',
    model: 'Galaxy S24 Ultra',
    brand: 'Samsung',
    description: 'El poder de la IA en tus manos con Galaxy AI.',
    price: 15999,
    type: 'PHONE',
    image: 'https://images.samsung.com/is/image/samsung/p6pim/mx/2401/gallery/mx-galaxy-s24-s921-sm-s921bzbaltm-539324637?$650_519_PNG$',
    specs: ['Pantalla 6.2"', 'Cámara 50MP', 'Exynos 2400']
  },
  {
    id: 'moto-g84',
    name: 'Motorola G84',
    model: 'Moto G84 5G',
    brand: 'Motorola',
    description: 'Excelente balance entre precio y calidad.',
    price: 4999,
    type: 'PHONE',
    image: 'https://armatupaquete.com/wp-content/uploads/2023/11/moto-g84-magenta.png',
    specs: ['256GB Almacenamiento', '12GB RAM', 'Cámara 50MP']
  }
];

export const LOCATIONS: Location[] = [
  {
    id: 'qro-1',
    name: 'Sucursal Diamante',
    address: 'Calle Diamante 909, Lomas de San Pedrito, Querétaro.',
    phone: '476 285 1933',
    hours: 'Lun-Vie 9:00 - 19:00, Sáb 10:00 - 14:00'
  },
  {
    id: 'qro-2',
    name: 'Sucursal Pie de la Cuesta',
    address: 'Av. Pie de la Cuesta 115, San Pablo, Querétaro.',
    phone: '476 285 1933',
    hours: 'Lun-Sáb 10:00 - 20:00'
  }
];