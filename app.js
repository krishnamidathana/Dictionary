const search =document.getElementById('search');
const inp  =document.getElementById('inp');
const sound  =document.createElement('sound');
const result = document.querySelector('.result');


const url ='https://api.dictionaryapi.dev/api/v2/entries/en/';

search.addEventListener('click',()=>{
   
  let inword = inp.value;
     fetch(` ${url} ${inword}`)
     .then((response)=>response.json())
     .then((data)=>{
       result.innerHTML =`<div class="result">
       <div class="word">
                 <h3>${inword}</h3>
                
                </div>
                <div class="details">
                   <p>${data[0].meanings[0].partOfSpeech}</p>
                   <p>${data[0].phonetic}</p>
               </div>
               
               <div class='mheading'>Meaning
            <p class="mean">${data[0].meanings[0].definitions[0].definition}</p>
            </div>
            <p class="example">
            ${data[0].meanings[0].definitions[0].example || ""}
            </p>
            
             </div>`;

    inp.value ='';
    })

    .catch( ()=>{
      result.innerHTML =`<h3>Couldn't Find The Word</h3>`
      inp.value ='';

    })
    })

