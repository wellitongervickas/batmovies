const greaterThan = {
  message: (value, options = { count: 0 }) =>
    `Must be greater than ${options.count}`,

  validate: (value = null, options = { count: 0 }) => {
    const count = options.count || 0

    if (!value) {
      return greaterThan.message(value, options)
    }

    if (String(value).length <= count) {
      return greaterThan.message(value, options)
    }

    return null
  },
}

export default greaterThan
