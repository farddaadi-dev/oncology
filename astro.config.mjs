// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({

// site: '[https://yourwebsite.com](https://yourwebsite.com)'

fonts: [
    {
      provider: fontProviders.local(),
      name: "Vazirmatn-Light",
      cssVariable:"--font-vazirmatn-light",
      options: {
        variants: [{
          src: ['./src/assets/fonts/Vazirmatn-Light.woff2'],
          weight: '300',
          style: 'normal'
        }]
      }
    },
    {
      provider: fontProviders.local(),
      name: "Vazirmatn-Regular",
      cssVariable:"--font-vl",
      options: {
        variants: [{
          src: ['./src/assets/fonts/Vazirmatn-Regular.woff2'],
          weight: '400',
          style: 'normal'
        }]
      }
    },
    {
      provider: fontProviders.local(),
      name: "Vazirmatn-Medium",
      cssVariable: "--font-vazirmatn-medium",
      options: {
        variants: [{
          src: ['./src/assets/fonts/Vazirmatn-Medium.woff2'],
          weight: '500',
          style: 'normal'
        }]
      }
    },
    {
      provider: fontProviders.local(),
      name: "Vazirmatn-Bold",
      cssVariable: "--font-vazirmatn-bold",
      options: {
        variants: [{
          src: ['./src/assets/fonts/Vazirmatn-Bold.woff2'],
          weight: '700',
          style: 'normal'
        }]
      }
    },
    {
      provider: fontProviders.local(),
      name: "Estedad",
      cssVariable: "--font-estedad",
      options: {
        variants: [{
          src: ['./src/assets/fonts/Estedad-Bold.woff2'],
          weight: '700',
          style: 'normal'
        }]
      }
    }
  ]
});