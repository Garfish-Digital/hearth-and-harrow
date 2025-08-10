// Font Awesome Pro Configuration for Duotone Light Theme
import pkg from '@fortawesome/fontawesome-pro';
const { config, library } = pkg;

// Common Pro Duotone Icons for E-commerce
import { 
  faShoppingCart,
  faHeart,
  faUser,
  faHome,
  faSearch,
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
  faLeaf,
  faGem,
  faMagic,
  faStar,
  faShoppingBag,
  faPlus,
  faMinus,
  faTrash,
  faEye,
  faSparkles,
  faSeedling,
  faFlower,
  faCrystalBall,
  faCandle,
  faMoon,
  faSun,
  faFeather,
  faHand,
  faCalendar,
  faClock,
  faTag,
  faCheckCircle,
  faTimesCircle,
  faInfoCircle,
  faExclamationTriangle,
  faArrowRight,
  faArrowLeft,
  faChevronDown,
  faChevronUp,
  faBars,
  faTimes,
  faWandMagicSparkles,
  faTreeCity
} from '@fortawesome/pro-duotone-svg-icons';

// Pro Light Icons for subtle elements
import {
  faShoppingCart as faShoppingCartLight,
  faHeart as faHeartLight,
  faUser as faUserLight,
  faSearch as faSearchLight,
  faEnvelope as faEnvelopeLight,
  faPhone as faPhoneLight
} from '@fortawesome/pro-light-svg-icons';

// Brand icons
import {
  faInstagram,
  faFacebook,
  faTwitter,
  faYoutube
} from '@fortawesome/free-brands-svg-icons';

// Configure Font Awesome
config.autoAddCss = false; // We'll handle CSS manually for better control

// Add icons to library
library.add(
  // Duotone icons for main interface
  faShoppingCart,
  faHeart,
  faUser,
  faHome,
  faSearch,
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
  faLeaf,
  faGem,
  faMagic,
  faStar,
  faShoppingBag,
  faPlus,
  faMinus,
  faTrash,
  faEye,
  faSparkles,
  faSeedling,
  faFlower,
  faCrystalBall,
  faCandle,
  faMoon,
  faSun,
  faFeather,
  faHand,
  faCalendar,
  faClock,
  faTag,
  faCheckCircle,
  faTimesCircle,
  faInfoCircle,
  faExclamationTriangle,
  faArrowRight,
  faArrowLeft,
  faChevronDown,
  faChevronUp,
  faBars,
  faTimes,
  faWandMagicSparkles,
  faTreeCity,
  
  // Light icons for subtle elements
  faShoppingCartLight,
  faHeartLight,
  faUserLight,
  faSearchLight,
  faEnvelopeLight,
  faPhoneLight,
  
  // Brand icons
  faInstagram,
  faFacebook,
  faTwitter,
  faYoutube
);

// Icon mapping for easy component usage
export const iconMap = {
  // E-commerce
  'shopping-cart': 'shopping-cart',
  'shopping-bag': 'shopping-bag',
  'heart': 'heart',
  'star': 'star',
  'tag': 'tag',
  'eye': 'eye',
  
  // Navigation
  'home': 'home',
  'user': 'user',
  'search': 'search',
  'bars': 'bars',
  'times': 'times',
  'chevron-down': 'chevron-down',
  'chevron-up': 'chevron-up',
  'arrow-right': 'arrow-right',
  'arrow-left': 'arrow-left',
  
  // Contact
  'phone': 'phone',
  'envelope': 'envelope',
  'map-marker-alt': 'map-marker-alt',
  
  // Pagan/Mystical (but peaceful)
  'leaf': 'leaf',
  'gem': 'gem',
  'magic': 'magic',
  'sparkles': 'sparkles',
  'seedling': 'seedling',
  'flower': 'flower',
  'crystal-ball': 'crystal-ball',
  'candle': 'candle',
  'moon': 'moon',
  'sun': 'sun',
  'feather': 'feather',
  'hand': 'hand',
  'wand-magic-sparkles': 'wand-magic-sparkles',
  'tree-city': 'tree-city',
  
  // UI Elements
  'plus': 'plus',
  'minus': 'minus',
  'trash': 'trash',
  'calendar': 'calendar',
  'clock': 'clock',
  'check-circle': 'check-circle',
  'times-circle': 'times-circle',
  'info-circle': 'info-circle',
  'exclamation-triangle': 'exclamation-triangle',
  
  // Social
  'instagram': 'instagram',
  'facebook': 'facebook',
  'twitter': 'twitter',
  'youtube': 'youtube'
};

// Color themes for duotone icons
export const iconThemes = {
  peaceful: {
    primary: '#1F75FE',    // Crayola Blue
    secondary: '#87CEEB',   // Sky Blue
    opacity: 0.3
  },
  nature: {
    primary: '#1DF914',    // Crayola Green
    secondary: '#98FB98',   // Pale Green
    opacity: 0.3
  },
  warm: {
    primary: '#FFAE42',    // Crayola Yellow
    secondary: '#FFFFE0',   // Light Yellow
    opacity: 0.3
  },
  mystical: {
    primary: '#926EAE',    // Crayola Purple
    secondary: '#E6E6FA',   // Lavender
    opacity: 0.3
  },
  energetic: {
    primary: '#FF7538',    // Crayola Orange
    secondary: '#FFE4B5',   // Moccasin
    opacity: 0.3
  },
  passionate: {
    primary: '#EE204D',    // Crayola Red
    secondary: '#FFB6C1',   // Light Pink
    opacity: 0.3
  }
};