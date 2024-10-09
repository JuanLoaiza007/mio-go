import { isValidNumber } from '@/utils/parserCardNumber'

describe('isValidNumber', () => {
  test('Debería retornar true para un string de 13 dígitos', () => {
    expect(isValidNumber('1234567890123')).toBe(true)
  })

  test('Debería retornar false para un string con menos de 13 dígitos', () => {
    expect(isValidNumber('12345678901')).toBe(false)
  })

  test('Debería retornar false para un string con más de 13 dígitos', () => {
    expect(isValidNumber('123456789012345')).toBe(false)
  })

  test('Debería retornar false para un string que contenga caracteres no numéricos', () => {
    expect(isValidNumber('12345abc90123')).toBe(false)
  })
})
