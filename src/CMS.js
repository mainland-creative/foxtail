const contentful = require('contentful')

export async function getModel (entryId) {
  const client = contentful.createClient({
    space: '4tqrr87yocpr',
    accessToken: '50e5ba5a48857cdcf6ffea37a68b058576d0622bf1b1ea6cf31d4c1853eae709',
  })

  return await client.getEntries({ 'sys.id': entryId })
}

export async function getContent (contentId) {
  const client = contentful.createClient({
    space: '4tqrr87yocpr',
    accessToken: '50e5ba5a48857cdcf6ffea37a68b058576d0622bf1b1ea6cf31d4c1853eae709',
  })

  const res = await client.getEntries()
  const content = []

  res.items.map(i => {
    if (i.sys.contentType.sys.id === 'venue') {
      const { name, url, image} = i.fields 
      content.push({ name, url, image})
    }
    return
  })

  return content
}

export function extractAssetUrls (assetObj) {
  if (!assetObj) return []
  
  let format;
  if (navigator.userAgent.indexOf('Chrome') !== -1) {
    format = 'webp'
  } else {
    format = 'jpg'
  }

  return assetObj.map(a => a.fields.file.url + `?fm=${format}`)
}

