import {
    services,
    type Service,
    type ServiceSlug,
  } from "@/data/services";
  
  export function getService(slug: ServiceSlug): Service {
    return services[slug];
  }