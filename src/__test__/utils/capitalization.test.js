import { capitalizeFirstLetter } from '@/utils/capitalization'

describe('capitalizeFirstLetter', () => {
  test('Deberia capitalizar la primera letra de una palabra', () => {
    expect(capitalizeFirstLetter('hola')).toBe('Hola')
  })

  test('Deberia manejar cadenas de 0 letras (vacias)', () => {
    expect(capitalizeFirstLetter('')).toBe('')
  })

  test('Deberia manejar cadenas de una letra', () => {
    expect(capitalizeFirstLetter('a')).toBe('A')
  })

  test('Deberia dejar sin cambios las letras posteriores a la primera', () => {
    expect(capitalizeFirstLetter('eJEMPLO')).toBe('EJEMPLO')
  })
})
