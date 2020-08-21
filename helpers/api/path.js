import { compile } from 'path-to-regexp'

export const transformPath = (path, payload) => {
  try {
    return compile(path)(payload)
  } catch (err) {
    return path
  }
}
