const BASE_URL = "https://rebirth-app-backend.herokuapp.com/"

export const apiDataAdoption = async(url=BASE_URL)=>{
  try{
    //ahora debemos ejecutar el fetch para poder traer información
    
    const response = await fetch (url)
    const data = response.json();
    console.log("data", data);
    return data;

  }catch(error){
    console.log(error.message)
  }
}