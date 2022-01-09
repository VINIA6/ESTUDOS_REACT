function Evento({numero}){
    function meuEvento(){
        console.log(`O evento ${numero} foi ativado...`)
    }

    return(
        <div>
            <p>Clique para disparar um evento</p>
            <button onClick={meuEvento}>Ativar</button>
        </div>
    )
}

export default Evento