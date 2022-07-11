import axios from 'axios'

const KEY = 'AIzaSyCljAkgSyU4IJEn55ErtCquh65i3I8JUt8';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
});
