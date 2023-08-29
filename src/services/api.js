import axios from 'axios';

//URL api :movie/now_playing?api_key=6095861d55786f2fd544aef5d27ffb3e&language=pt-BR
//Base URL:



//chave Api:6095861d55786f2fd544aef5d27ffb3e

const api = axios.create({
    baseURL:'https://api.themoviedb.org/3/'
})
export default api;
