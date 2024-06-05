
let id;
const mensagem = document.getElementById('tempoEsgotado')

const formatar = (tempo)=> `0${tempo}`.slice(-2)
const atualizar = (tempo)=>{
  const segundo = document.getElementById('segundos')
  const minuto = document.getElementById('minutos')
  const horas = document.getElementById('horas')
  const dias = document.getElementById('dias')

  const qtdSegundos = tempo % 60
  const qtdMinutos = Math.floor(tempo % (60 * 60) /60)
  const qtdHoras = Math.floor(tempo % (60 * 60 * 24) / (60 * 60))
  const qtdDias = Math.floor(tempo / (60 * 60 * 24))



  segundo.innerHTML= formatar(qtdSegundos)
  minuto.innerHTML= formatar(qtdMinutos)
  horas.innerHTML= formatar(qtdHoras)
  dias.innerHTML= formatar(qtdDias)
}

const pararContagem = ()=>clearInterval(id)
const contagemRegressiva = (tempo)=>{

  const contar = ()=>{
      if(tempo < 0){
          pararContagem()
          mensagem.innerHTML='tempo de inscrição esgotado'
      }else{
          atualizar(tempo)
          tempo--
    }
      
  }


  id = setInterval(contar, 1000)
}


const tempoRestante = ()=>{
  const data = new Date('2024-06-04 22:20:00')
  const hoje = Date.now()

  return Math.floor((data - hoje) / 1000 )
}


contagemRegressiva(tempoRestante())


