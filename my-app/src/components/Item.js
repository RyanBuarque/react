import PropTypes from 'prop-types';

function Item({marca, ano_lancamento}) {
    return(
        <>
        <li>{marca} - {ano_lancamento}</li>
        </>
    )
}

Item.protoTypes = {
    marca: PropTypes.string.isRequired,
}

Item.defaultProps = {
    marca: "Preenchimento automatico"
}

export default Item;