import PropTypes from "prop-types"

function Item({marca, lancamento}){
    return(
        <>
            <li>
                {marca} - {lancamento}    
            </li>
        </>
    )
}
Item.protTypes ={
    marca:PropTypes.string.isRequired,
    lancamento:PropTypes.number,
}

Item.defaultProps ={
    marca:'Chevrolet',
    lancamento: 0
}

export default Item