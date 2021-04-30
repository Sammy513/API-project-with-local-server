import {promise} from './promiseReq.js'
import {url} from './config.js'

const valName = document.querySelector('.registerName')
const valEmail = document.querySelector('.registerEmail')
const regCompany = document.querySelector('.company')
const regCountry = document.querySelector('.registerCountry')
const btnReg = document.querySelector('.btnRegister')

const formReg = document.querySelector('form')


function sendRegister(name, email, company, country) {
    promise('POST', url, JSON.stringify({name, email, company, country}))
    .then(response => receiveDides(response))
    .catch(err => console.log(err))
}

function receiveDides(dides) {
    console.log(dides)
}

formReg.addEventListener('submit', function() {
     sendRegister(valName.value, valEmail.value, regCompany.value, regCountry.value)
     valName.value = ''
     valEmail.value = ''
     regCompany.value = ''
     regCountry.value = ''
})