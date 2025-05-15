export const handler = async () => {
  // console.log("handler")
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hello world!'
    })
  }
}

// handler()
//console.log("123")
