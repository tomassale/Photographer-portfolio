import GetHook from '../../../hook/GetHook'

const Initial = () => {

  const {data, loading} = GetHook('http://localhost:8080/initial')

  return (
    <div className="initial">
      <h1>SERGIO SALE</h1>
      {}
    </div>
  )
}

export default Initial