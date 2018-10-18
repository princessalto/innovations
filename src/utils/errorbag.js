export const errorbag = ({ data, status }, errors) => {
  switch (status) {
    case 422:
    case 403:
      for (let key in data) {
        errors.add({ field: key, msg: data[key].join('\n') })
      }
      break

    case 500:
      errors = 'An unhandled exception occured!'
      break

    default:
      errors = data
      break
  }
}
