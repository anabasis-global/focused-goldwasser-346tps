

const axios = require('axios')

const shell = require('shelljs')

const path = require('path')


const powershell = require('powershell')
//shell.exec("cd frontend && yarn install")



try {

   let auth = axios.get('https://iz.anabasis.pro/auth').then(response => response).catch(e => e).then(data => console.log(data))


   let authHeaders = [

   ]

   
} catch (error) {
    
}



async function handler(_req, _res) {

    console.log(_req)


    const res = await fetch(`https://api.github.com/meta`);
    const data = await res.json();
  
    // Pass data to the page via props
    return { props: { data } };

}
