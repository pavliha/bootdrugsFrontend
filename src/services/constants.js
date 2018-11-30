const urls = {
  frontend: 'https://analyzer.zp.ua',
  backend: 'https://analyzer.zp.ua',

}
if (process.env.NODE_ENV === 'development') {
  urls.backend = 'http://192.168.0.164:8172/api/v1'
  urls.frontend = 'http://localhost:2000'
}

export const BACKEND_URL = urls.backend
export const HOST_URL = urls.frontend
