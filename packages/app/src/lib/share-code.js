const seo = url => `<meta name="twitter:card" content="summary_large_image" />
<meta name="image" content="${url}" />
<meta itemprop="image" content="${url}" />
<meta name="twitter:image" content="${url}" />
<meta property="og:image" content="${url}" />`

const html = url =>
  `<img src="${url}" alt="Generated by https://cards.microlink.io">`

const markdown = url =>
  `![Generated by https://cards.microlink.io](${url})`

const javascript = query => {
  const endpoint = query.endpoint ? query.endpoint : 'https://i.microlink.io/'
  const payload = new URLSearchParams(query).toString()

  return `const screenshotUrl = ${endpoint}
const cardUrl = 'https://cards.microlink.io/?${payload}'
const image = \`\${screenshotUrl}\${encodeURIComponent(cardUrl)}\``
}

export const shareCode = {
  seo,
  html,
  markdown,
  javascript
}
