const message = 'Field is required'

const blank = (value = null) => {
  if ([null, undefined, ''].includes(value)) {
    return message
  }

  return null
}

export default blank
