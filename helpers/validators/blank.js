export const message = 'Is required'

const blank = (value = null) => {
  if ([null, undefined, ''].includes(value)) {
    return message
  }

  return null
}

export default {
  validate: blank,
  message: () => message,
}
