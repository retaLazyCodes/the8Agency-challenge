const ERROR_HANDLERS = {

  defaultError: (res, error) => {
    console.error(error.name)
    res.status(500).end()
  }
}

module.exports = (error, request, response, next) => {
  console.error(error)
  const handler =
    ERROR_HANDLERS[error.name] || ERROR_HANDLERS.defaultError

  handler(response, error)
}