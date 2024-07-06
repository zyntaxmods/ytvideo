const url = 'https://youtube-video-download-info.p.rapidapi.com/dl?id=HIZgcZMoBHw';
const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': 'db3fcc2c7emsha0cc08b68381743p1c76b9jsn39db8c98bb60',
    'x-rapidapi-host': 'youtube-video-download-info.p.rapidapi.com'
  }
};

try {
  const response = await fetch(url, options);
  const result = await response.text();
  console.log(result);
} catch (error) {
  console.error(error);
}