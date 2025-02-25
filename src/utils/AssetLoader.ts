// Single source of truth for all assets
const ASSETS = {
  // Icons & Logos
  ChipCard: () => import('../assets/Chip_Card.svg'),
  CardCircle: () => import('../assets/card_circle.svg'),
  PayPal: () => import('../assets/paypal.svg'),
  Card: () => import('../assets/Card.svg'),
  Person: () => import('../assets/Person.svg'),

  // Charts
  CHART_JS: () => import('chart.js'),
  CHART_DATALABELS: () => import('chartjs-plugin-datalabels'),

  // Add other assets here...
} as const;

type AssetKey = keyof typeof ASSETS;

class AssetLoader {
  private static cache: Map<AssetKey, any> = new Map();

  static async load<T = any>(key: AssetKey): Promise<T> {
    if (this.cache.has(key)) {
      return this.cache.get(key);
    }

    try {
      const module = await ASSETS[key]();
      const asset = module.default || module;
      this.cache.set(key, asset);
      return asset as T;
    } catch (error) {
      console.error(`Failed to load asset: ${key}`, error);
      throw error;
    }
  }

  static async preloadAssets(keys: AssetKey[]) {
    return Promise.all(keys.map(key => this.load(key)));
  }
}

export default AssetLoader; 