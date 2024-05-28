let id;

const formatar= (tempo)=> `0${tempo}`.slice(-2) 

const atualizar = (tempo)=> {

  const segundo = document.getElementById('segundos')
  const minutos = document.getElementById('minutos')
  const horas = document.getElementById('horas')
  const dias = document.getElementById('dias')

  const qtdSegundo = tempo % 60;
  const qtdMinutos = parseInt(tempo % (60 * 60) / 60)
  const qtdHoras = parseInt(tempo % (60 * 60 * 24) / (60 * 60))
  const qtdDias = parseInt(tempo / (60 * 60 * 24) )


  segundo.innerHTML= formatar(qtdSegundo)
  minutos.innerHTML= formatar(qtdMinutos)
  horas.innerHTML= formatar(qtdHoras)
 dias.innerHTML= formatar(qtdDias)
  

}



const pararTempo =()=>{
  clearInterval(id)
}

const contagemRegresssiva = (tempo)=>{

  const contar = ()=>{
    if(tempo >= 0 ){
      atualizar(tempo)
     tempo--
      
    }
    if (tempo === 0) {
      pararTempo()
       const tempoEsgotado = document.getElementById('tempoEsgotado')
       tempoEsgotado.textContent='O tempo para inscreção para o evento se esgotou'
       tempoEsgotado.classList.add('tempoEsgotado')
        document.getElementById('segundos').innerHTML= '00'
       return;

    }
   
   
   
  
  }
   
  id=setInterval(contar, 1000)



}



const dataEvento = ()=> {
const data = new Date('2024-05-29 06:15:00')
const hoje = Date.now()
return Math.floor((data - hoje) / 1000)

}
contagemRegresssiva(dataEvento())

