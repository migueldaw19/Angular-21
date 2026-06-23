
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 0,
    "preload": [
      "chunk-QKQSTOC3.js",
      "chunk-4VHADNFZ.js"
    ],
    "route": "/products"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-K6LUBDXI.js",
      "chunk-4VHADNFZ.js"
    ],
    "route": "/basic-plan"
  },
  {
    "renderMode": 0,
    "redirectTo": "/products",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 4549, hash: 'f59ad4b045ba0ceeffb732839fe7fec23fc6f0e166439df5309c686ffc941a64', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 996, hash: '36570dda25cf37df63abba82b73a882a6a3d8a10e655fb4531efd973c322267c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-JIIMFE5D.css': {size: 13152, hash: '+xrjx9v8G6M', text: () => import('./assets-chunks/styles-JIIMFE5D_css.mjs').then(m => m.default)}
  },
};
