const ultis = {}

ultis.fetchData = async (endpoint) => {
  const api = await fetch(`https://5f91384ae0559c0016ad7349.mockapi.io/${endpoint}`,{
    mode: 'cors'
  })
  const data = await api.json()
  console.log(data)
  return data
}

ultis.postData = async (url,data) => {
  await fetch(url,
  {method:'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data),
  })
}

ultis.deleteData = async (id,endpoint) => {
  await fetch(`https://5f91384ae0559c0016ad7349.mockapi.io/${endpoint}/${id}`,{
    method:'delete'
  })
}

ultis.putData = async (id,endpoint,data) => {
  await fetch(`https://5f91384ae0559c0016ad7349.mockapi.io/${endpoint}/${id}`,{
    method:'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
}
