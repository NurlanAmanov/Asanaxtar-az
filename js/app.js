const sldierbar =document.getElementById('sldierbar')
function openbar(){
  if(sldierbar.style.display==='none'){
    sldierbar.style.display='block'
  }else{
    sldierbar.style.display="none"
  }
}
function axtar(selectedFormat) {
  const info=document.getElementById('info')
  const searchQuery = document.getElementById('searchInput').value.toLowerCase().trim();  
  
  if (!searchQuery) {  
    info.innerHTML=` <div class="bg-red-500 text-white font-semibold tracking-wide flex items-center w-max max-w-sm p-4 rounded-md shadow-md shadow-red-200" role="alert">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-[18px] shrink-0 fill-white inline mr-3" viewBox="0 0 32 32">
                  <path
                      d="M16 1a15 15 0 1 0 15 15A15 15 0 0 0 16 1zm6.36 20L21 22.36l-5-4.95-4.95 4.95L9.64 21l4.95-5-4.95-4.95 1.41-1.41L16 14.59l5-4.95 1.41 1.41-5 4.95z"
                      data-original="#ea2d3f" />
              </svg>

              <span class="block sm:inline text-sm mr-3">Xananı doldurun</span>

              <svg onclick="closedd()" xmlns="http://www.w3.org/2000/svg" class="w-3 cursor-pointer shrink-0 fill-white ml-auto"
                  viewBox="0 0 320.591 320.591">
                  <path
                      d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                      data-original="#000000" />
                  <path
                      d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                      data-original="#000000" />
              </svg>
          </div>
`
    return; 
  }

  let formatQuery = '';

  if (selectedFormat) {
      formatQuery = ` filetype:${selectedFormat}`;
  }

  const googleSearchUrl = `https://www.google.com/search?q=intitle:${encodeURIComponent(searchQuery)}${formatQuery}`;
  window.open(googleSearchUrl, '_blank');
}
function closedd(){
  info.remove()
}