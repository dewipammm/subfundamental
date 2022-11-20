class DataSource {
  static searchMovie(keyword) {
    return fetch(`https://api.themoviedb.org/3/movie/550?api_key=bf8878f9a17b856739270352ebc0ceef=${keyword}`)
      .then(response => {
        return response.json();
      })
      .then(responseJson => {
        if (responseJson.results) {
          return Promise.resolve(responseJson.results);
        } else {
          return Promise.reject(`${keyword} is not found`);
        }
      });
  }
}
 
export default DataSource;