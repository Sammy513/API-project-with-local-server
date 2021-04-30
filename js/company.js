import {promise} from './promiseReq.js'
import {url} from './config.js'


const ul = document.querySelector('.container-company ul')


function getDides() {
    promise('GET', url)
    .then(response => response)
    .then(dides => renderDides(dides))
    .catch(err => console.log(err))

}
getDides()


function renderDides(dides) {
    dides.forEach(dide => {
        const li = document.createElement('li')
        li.setAttribute('data', dide.id)
        li.innerHTML = dide.name + `<p>${dide.email}</p>` + dide.company + `<p>${dide.country}</p>`
        const deleteBtn = document.createElement('a')
        deleteBtn.setAttribute('href', '#')
        deleteBtn.setAttribute('data', 'data-delete')
        deleteBtn.textContent = 'Delete'
        li.appendChild(deleteBtn)
        
        ul.appendChild(li)
    });
}


function remove(id) {
   promise('DELETE', `${url}/${id}`)
   .then(response => getDides(response))
   .then(dados => cb(dados))
   .catch(err => console.log(err))

   function cb(dides) {
       ul.innerHTML = ''
       renderDides(dides)
   }
}

ul.addEventListener('click', act)
function act(e) {
     let currentA = e.target
     let current = e.target

     while(current.nodeName !== 'LI') {
         current = current.parentElement
     }

     while(currentA.nodeName !== 'A') {
         currentA = currentA.parentElement
     }
    
     if(currentA) {
        remove(current.getAttribute('data'))
     }
    
}
