import Item from './Item';

function List() {
  return (
    <>
      <ul>
        <li>item1</li>
        <li>item2</li>
        <Item marca="Ferrari" ano_lancamento="1984"/>
        <Item ano_lancamento="1984"/>
      </ul>
    </> 
  )
}

export default List
