import Item from "./item"

function List(){
    return(
        <div>
            <h1>
                Minha lista
            </h1>
            <ul>
                <Item marca = 'Ferreira' lancamento={1985}/>
                <Item marca = 'Fiat' lancamento={1964}/>  
            </ul>
        </div>
    )
}

export default List