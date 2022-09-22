import OutraLista from './OutraLista';


function ListaArr() {

const meusItens =  ["react", "vue", "angular"]

    return(
        <div>
            <h1>Renderização de listas</h1>
            <OutraLista itens={meusItens}/>
            <OutraLista itens={[]}/>
        </div>
    )
}

export default ListaArr;