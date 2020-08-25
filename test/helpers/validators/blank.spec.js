import blank from '@/helpers/validators/blank'

describe('Helpers validators blank', () => {
  test('should be defined', () => {
    expect(blank).toBeDefined()
  })
  test('should return a message when wrong value', () => {
    expect(blank()).toBe('Field is required')
    expect(blank(null)).toBe('Field is required')
    expect(blank(undefined)).toBe('Field is required')
    expect(blank('')).toBe('Field is required')
  })

  test('should return null when valid value', () => {
    expect(blank(0)).toBeNull()
    expect(blank('0')).toBeNull()
    expect(blank('null')).toBeNull()
    expect(blank('undefined')).toBeNull()
    expect(blank('im a text')).toBeNull()
  })
})
