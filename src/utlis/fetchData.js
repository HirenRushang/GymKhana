
export const excerciseOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'api_key',
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
	}
};

export const YouOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'api_key',
		'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
	}
};




export const fetchData = async(url, option)=>{

  const response = await fetch(url, option)
  const data = await response.json()

  return data

}
