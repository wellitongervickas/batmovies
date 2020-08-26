export const message = 'Must be greater than'

const greaterThan = (value = null, options = {}) => {
  const count = options.count || 0

  if (!value) {
    return `${message} ${count}`
  }

  if (String(value).length <= count) {
    return `${message} ${count}`
  }

  return null
}

export default {
  validate: greaterThan,
  message: (_value, options = {}) => {
    const count = options.count || 0
    return `${message} ${count}`
  },
}
