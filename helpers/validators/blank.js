const blank = {
  message: () => 'Is required',
  validate: (value = null) => {
    if ([null, undefined, ''].includes(value)) {
      return blank.message()
    }

    return null
  },
}

export default blank
