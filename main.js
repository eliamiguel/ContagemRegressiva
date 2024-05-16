
const tempoEsgotado= document.getElementById('tempoEsgotado')
const formatarDigito = (digito)=>`0${digito}`.slice(-2)

const atualizar = (tempo)=>{
  const segundos = document.('segundos')
  const minutos = document.('minutos')
  const horas = document.('horas')
  const dias = document.('dias')


  const qtdSegundos = tempo % 60;
  const qtdMinutos = Math.floor(tempo % (60 * 60) / 60);
  const qtdHoras = Math.floor(tempo % (60 * 60 * 24) / (60 * 60));
  const qtdDias= Math.floor(tempo / (60 * 60 * 24));

  segundos.textContent= formatarDigito(qtdSegundos)
  minutos.textContent= formatarDigito(qtdMinutos)
  horas.textContent= formatarDigito(qtdHoras)
  dias.textContent= formatarDigito(qtdDias)
}


const contagemRegressiva =(tempo)=>{
  const pararContagem = ()=>clearInterval(id);
  
  
  const contar =()=>{
    if(tempo > 0 ){
      pararContagem()
      tempoEsgotado.textContent = 'Tempo de inscrição esgotou'
      tempoEsgotado.classList.add('tempoEsgotado')
    } 
    atualizar(tempo)
    tempo--;
  } 
  
  const id = setInterval(contar, 1000 );
}

const tempoRestante = ()=>{
  const dataEvento = new Date('2024-05-16 00:00:00')
  const hoje = Date.now()
  return Math.floor((dataEvento - hoje) / 1000) 
}

contagemRegressiva(tempoRestante())