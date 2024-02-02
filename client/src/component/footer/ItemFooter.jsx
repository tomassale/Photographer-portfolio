const ItemFooter = ({footerItem}) => {
  return (
    <>
      {footerItem.map((subobj)=>(
        <li key={subobj._id}>
          <a href={subobj.link}>{subobj.content}</a>
        </li>
      ))}
    </>

  )
}

export default ItemFooter