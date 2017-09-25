export const getCards = ({ page, limit, name }) =>
  fetch(
    `http://api.demo.lakmus.org/api/clients?_start=${(page - 1) *
      limit}&_limit=${limit}&name=${name}`,
    {
      method: "GET"
    }
  ).then(res => res.json());

export const createCard = data =>
  new Promise((resolve, reject) =>
    setTimeout(() =>
      resolve({ ...data, id: Math.round(Math.random() * 100000) }, 500)
    )
  );
