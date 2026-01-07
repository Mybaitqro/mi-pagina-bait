
import { Product, Plan, Phone, Location } from './types';

export const LOGO_URL = "https://i.postimg.cc/bwRc9nMp/logo-bait.png";

export const CONTACT_CONFIG = {
  whatsapp: "524762851933", 
  defaultMessage: "¡Hola Bait Querétaro! Vi su publicidad y me interesa una SIM con la promo de apertura.",
  email: "ventas@baitqueretaro.com"
};

// CAMBIA ESTOS LINKS POR TUS PERFILES REALES
export const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/baitqueretaro",
  instagram: "https://www.instagram.com/baitqueretaro",
  tiktok: "https://www.tiktok.com/@baitqueretaro"
};

export const TESTIMONIALS = [
  {
    name: "Ricardo M.",
    zone: "Juriquilla",
    text: "La eSIM me llegó al correo en 5 minutos. Excelente señal en toda la ciudad.",
    stars: 5
  },
  {
    name: "Sofía G.",
    zone: "Centro",
    text: "Cambié mi número de siempre a Bait y me regalaron los 20GB. ¡Súper recomendado!",
    stars: 5
  },
  {
    name: "Juan P.",
    zone: "Corregidora",
    text: "Compré un iPhone con PayJoy y solo me pidieron mi INE. Trámite muy rápido.",
    stars: 5
  }
];

export const CONNECTIVITY_PRODUCTS: Product[] = [
  {
    id: 'sim-fisica',
    name: 'SIM Física Bait',
    description: 'Envío gratis en Querétaro. Incluye 20GB de regalo por portabilidad.',
    price: 100,
    type: 'SIM',
    image: 'https://i.postimg.cc/85M8yvV7/bait-sim-card.png' 
  },
  {
    id: 'esim-virtual',
    name: 'eSIM Bait',
    description: 'Activación digital instantánea. Sin cables, sin esperas.',
    price: 100,
    type: 'ESIM',
    image: 'https://i.postimg.cc/mD8P4r7L/esim-icon.png'
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
    image: 'https://m.media-amazon.com/images/I/71d7rfSl0wL._AC_SL1500_.jpg',
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
    image: 'https://m.media-amazon.com/images/I/71WkS9YmS4L._AC_SL1500_.jpg',
    specs: ['Pantalla 6.2"', 'Cámara 50MP', 'Exynos 2400']
  },
  {
    id: 'moto-g84',
    name: 'Motorola G84',
    model: 'Moto G84 5G',
    brand: 'Motorola',
    description: 'Excelente balance entre precio y calidad.',
    price: 4999,
    image: 'https://m.media-amazon.com/images/I/61N9p7XU8KL._AC_SL1200_.jpg',
    type: 'PHONE',
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
