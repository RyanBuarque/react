import style from './Pessoa.module.css';

// function Pessoa(props) {
//     return (
//         <div>
//             <img src={props.foto} alt={props.nome} />
//             <h2>Nome: {props.nome}</h2>
//             <p>Idade: {props.idade}</p>
//             <p>Profissão: {props.profissao}</p>
//         </div>
//     );
// };

function Pessoa({foto, nome, idade, profissao}) {
    return (
        <div className={style.container}>
            <img src={foto} alt={nome} />
            <h2>Nome: {nome}</h2>
            <p>Idade: {idade}</p>
            <p>Profissão: {profissao}</p>
        </div>
    );
}

export default Pessoa;