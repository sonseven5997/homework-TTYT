const ultis = {};

ultis.fetchData = async (endpoint) => {
  const api = await fetch(
    `https://floating-eyrie-61483.herokuapp.com/api/${endpoint}`,
    {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    }
  );
  const data = await api.json();
  console.log(data);
  return data;
};

ultis.postData = async (url, data) => {
  const api = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(data),
  })
  const dataToCheck = await api.json()
  console.log(dataToCheck)
  return dataToCheck
};

ultis.deleteData = async (id, endpoint) => {
  await fetch(
    `https://floating-eyrie-61483.herokuapp.com/api/${endpoint}/${id}`,
    {
      method: "delete",
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    }
  );
};

ultis.putData = async (id, endpoint, data) => {
  await fetch(
    `https://floating-eyrie-61483.herokuapp.com/api/${endpoint}/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        origin: `https://floating-eyrie-61483.herokuapp.com/api/${endpoint}/${id}`,
      },
      body: JSON.stringify(data),
    }
  );
};

ultis.convertDate = (date) => {
  return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
};
