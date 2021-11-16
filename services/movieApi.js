const url = 'https://json-server-movie-thanh-tung.herokuapp.com/movies';

const movieApi = {
  getAll: () => {
    return fetch(url, {
      method: 'GET',
    }).then(res => {
      return res.json()
    }).then(data => {
      return data;
    }).catch(error => {
      console.log(error);
    })
  },

  updateOne: (data) => {
    const { id, name, viName } = data;
    const updateUrl = `${url}/${id}`
    return fetch(updateUrl, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({
        name, viName
      })
    }).then(res => {
      return res.json()
    }).then(data => {
      return data;
    }).catch(error => {
      console.log(error);
    })
  },


};


export default movieApi;