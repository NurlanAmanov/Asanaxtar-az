const sldierbar =document.getElementById('sldierbar')
function openbar(){
  if(sldierbar.style.display==='none'){
    sldierbar.style.display='block'
  }else{
    sldierbar.style.display="none"
  }
}
document.getElementById('searchButton').addEventListener('click', function() {
  const query = document.getElementById('searchInput').value;
  const formattedQuery = `intitle:${query} filetype:pdf`;
  const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(formattedQuery)}`;
  window.open(googleSearchUrl, '_blank');
});