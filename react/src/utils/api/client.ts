import axios from "axios";

export const api = axios.create({ baseURL: "/" });

// Simple in-memory mocks
const PRODUCTS = [
  { id: 1, name: "Starter Plan", price: 199.0 },
  { id: 2, name: "Pro Plan", price: 499.0 },
  { id: 3, name: "Enterprise Plan", price: 999.0 }
];

api.interceptors.request.use(async (config) => {
  // simulate latency
  await new Promise(r => setTimeout(r, 150));
  return config;
});

api.interceptors.response.use((response) => response, (error) => Promise.reject(error));

// Poor-man's router (only for /products and /checkout)
export function installMockHandlers() {
  const origGet = api.get.bind(api);
  const origPost = api.post.bind(api);
  api.get = (url, ...rest) => {
    if (url === "/products") return Promise.resolve({ data: PRODUCTS } as any);
    return origGet(url as any, ...rest as any);
  };
  api.post = (url, data, ...rest) => {
    if (url === "/checkout") {
      if (!data || !("total" in data)) return Promise.reject(new Error("Invalid payload"));
      return Promise.resolve({ data: { ok: true, orderId: Math.random().toString(36).slice(2,8).toUpperCase() } } as any);
    }
    return origPost(url as any, data as any, ...rest as any);
  };
}
installMockHandlers();
