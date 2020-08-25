import { transformPath } from '@/helpers/api/path'

describe('Helpers api path', () => {
  test('transform paath should be defined', () => {
    expect(transformPath).toBeDefined()
  })

  test('should transform path with single payload', () => {
    const url = transformPath('/:id/details', {
      id: 12345,
    })

    expect(url).toBe('/12345/details')
  })

  test('should transform path with more than one property to replace', () => {
    const url = transformPath('/:id/:account_id/details\\?api_key=:api_key', {
      id: 12345,
      account_id: 51256,
      api_key: 151297358367862,
    })

    expect(url).toBe('/12345/51256/details?api_key=151297358367862')
  })

  test('should return a original path value', () => {
    const originalUrl = '/:id/:account_id/details'
    const urlVoid = transformPath(originalUrl)
    const urlNll = transformPath(originalUrl, null)
    const urlUndefined = transformPath(originalUrl, undefined)
    const UrlVoidObj = transformPath(originalUrl, {})
    const UrlWrongObj = transformPath(originalUrl, {
      notFound: 12345,
    })

    expect([
      urlNll,
      urlVoid,
      UrlVoidObj,
      urlUndefined,
      UrlWrongObj,
    ]).toContainEqual(originalUrl)
  })
})
