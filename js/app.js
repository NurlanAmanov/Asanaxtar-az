const sldierbar =document.getElementById('sldierbar')
function openbar(){
  if(sldierbar.style.display==='none'){
    sldierbar.style.display='block'
  }else{
    sldierbar.style.display="none"
  }
}
document.getElementById('searchButton').addEventListener('click', function () {
  const searchQuery = document.getElementById('searchInput').value.toLowerCase();
    const checkboxes = document.querySelectorAll('.format-checkbox:checked');
  let selectedFormats = Array.from(checkboxes).map(checkbox => checkbox.value);
  
  
  let formatQuery = '';
  if (selectedFormats.length > 0) {
      formatQuery = ` filetype:${selectedFormats[0]}`; 
  }


  const googleSearchUrl = `https://www.google.com/search?q=intitle:${encodeURIComponent(searchQuery)}${formatQuery}`;
  

  window.open(googleSearchUrl, '_blank');
});
