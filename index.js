
let participantes = [
  {
    nome: "Pedro Alves Cabral",
    email: "pedro.cabral@hotmail.com",
    datainscricao: new Date(2023, 4, 1, 15, 10),
    datacheckin: new Date(2023, 1, 10, 12, 0),
  },
  {
    nome: "Ana Paula",
    email: "gerlach.anap@gmail.com",
    datainscricao: new Date(2023, 2, 22, 19, 20),
    datacheckin: new Date(2023, 2, 25, 20, 20),
  },
  {
    nome: "João da Silva",
    email: "joao.silva@example.com",
    datainscricao: new Date(2023, 3, 12, 10, 30),
    datacheckin: null,
  },
  {
    nome: "Maria Oliveira",
    email: "maria.oliveira@example.com",
    datainscricao: new Date(2023, 3, 18, 14, 20),
    datacheckin: new Date(2023, 3, 21, 9, 0),
  },
  {
    nome: "Lucas Santos",
    email: "lucas.santos@example.com",
    datainscricao: new Date(2023, 3, 22, 8, 45),
    datacheckin: null,
  },
  {
    nome: "Juliana Lima",
    email: "juliana.lima@example.com",
    datainscricao: new Date(2023, 3, 28, 18, 0),
    datacheckin: new Date(2023, 1, 1, 13, 15),
  },
  {
    nome: "Marcos Pereira",
    email: "marcos.pereira@example.com",
    datainscricao: new Date(2023, 4, 5, 11, 10),
    datacheckin: new Date(2023, 4, 8, 10, 0),
  },
  {
    nome: "Fernanda Costa",
    email: "fernanda.costa@example.com",
    datainscricao: new Date(2023, 4, 9, 9, 30),
    datacheckin: new Date(2023, 4, 12, 14, 45),
  },
  {
    nome: "Gustavo Oliveira",
    email: "gustavo.oliveira@example.com",
    datainscricao: new Date(2023, 4, 15, 16, 20),
    datacheckin: new Date(2023, 4, 18, 18, 30),
  },
  {
    nome: "Carla Mendes",
    email: "carla.mendes@example.com",
    datainscricao: new Date(2023, 4, 20, 13, 45),
    datacheckin: new Date(2023, 4, 23, 9, 10),
  }
];


const criarNovoParticipante = (participante) => {
  const datainscricao = dayjs(Date.now()).to(participante.datainscricao)
  let datacheckin = dayjs(Date.now()).to(participante.datacheckin)

  if(participante.datacheckin == null) {
    datacheckin = `
      <button
        data-email = "${participante.email}"
        onclick="fazercheckin(event)"
     >
        Confirmar checkin
      </button>
    `


  }
  



  
  return `
  <tr>
    <td>
      <strong>
        ${participante.nome}
      </strong>
      <br>
      <small>
        ${participante.email}
      </small>
      </td>
    <td>${datainscricao}</td>
    <td>${datacheckin}</td>
  </tr>

`
}

const atualizarLista = (participantes) => {
  let output = ""
  // estrutura de repetição - loop
  for(let participante of participantes){
    output = output + criarNovoParticipante(participante)
  }



  // substituir informação do HTML
  document.
  querySelector("tbody")
  .innerHTML = output



  } 
  atualizarLista(participantes)


const adicionarParticipante = (event) => {
  event.preventDefault()

  const dadosdoFormulario = new FormData(event.target)

  const participante = {
    nome: dadosdoFormulario.get('nome'),
    email: dadosdoFormulario.get('email'),
    datainscricao: new Date(),
    datacheckin: null
  }

  //Verificar se o participante já existe
  const participanteExiste = participantes.find(
    (p) =>  p.email == participante.email
    
  )

  if(participanteExiste) {
    alert('Email já cadastrado!')
    return
  }
participantes = [participante, ...participantes]

atualizarLista(participantes)

//Limpar o formulario
event.target.querySelector('[name="nome"]').value = " "
event.target.querySelector('[name="email"]').value = " "
}

//Confirmar se realmente quer fazer checkin
const fazercheckin = (event) =>{
  const mensagemconfirmacao = 'Tem certeza que deseja fazer checkin? '
  if(confirm(mensagemconfirmacao) ==false){
    return
  }
  //Encontrar o check-in do participante
  const participante = participantes.find(
    (p) => p.email == event.target.dataset.email
  )

  participante.datacheckin = new Date()


//Atualizar a lista de parrticipantes
  atualizarLista(participantes)
}


  
  // arrow function

  
