export const getById = (id: string | undefined) => {

return(
fetch(`http://jsonplaceholder.typicode.com/photos/${id}`)
.then(function(response){
  return response.json();

})
)}

export const getAll = () => {

return(
fetch(`http://jsonplaceholder.typicode.com/photos`)
.then(function(response){
return response.json();
})
)}