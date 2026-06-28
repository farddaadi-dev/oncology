// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  
  fonts: [
    {
      provider: fontProviders.local(),
      name: "Vazirmatn",
      cssVariable: "--font-vazirmatn",
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/Vazirmatn-Light.woff2"],
            weight: "300",
            style: "normal"
          },
          {
            src: ["./src/assets/fonts/Vazirmatn-Regular.woff2"],
            weight: "400",
            style: "normal"
          },
          {
            src: ["./src/assets/fonts/Vazirmatn-Medium.woff2"],
            weight: "500",
            style: "normal"
          },
          {
            src: ["./src/assets/fonts/Vazirmatn-Bold.woff2"],
            weight: "700",
            style: "normal"
          }
        ]
      }
    },
    {
      provider: fontProviders.local(),
      name: "Estedad",
      cssVariable: "--font-estedad",
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/Estedad-Bold.woff2"],
            weight: "700",
            style: "normal"
          },
        ]
      }
    }
  ]
});