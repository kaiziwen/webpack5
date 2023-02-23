export const siteData = {
  "base": "/webpack5/",
  "lang": "zh-CN",
  "title": "Webpack5精讲",
  "description": "Webpack5从小白到大神",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/imgs/favicon.ico"
      }
    ]
  ],
  "locales": {}
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
