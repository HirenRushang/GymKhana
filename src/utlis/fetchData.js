
export const excerciseOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5a498c1c43mshca67543bd92f599p182f30jsn253ffd5a5f88',
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
	}
};

export const YouOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5a498c1c43mshca67543bd92f599p182f30jsn253ffd5a5f88',
		'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
	}
};




export const fetchData = async(url, option)=>{

  const response = await fetch(url, option)
  const data = await response.json()

  return data

}