
function App() {

  // const arr = [12, 43, 23];
  // const [a, b, c] = arr;
  // console.log(a,b,c);

  let address = {
    country: 'india',
    city: 'bangalore',
    pincode: '560001'
  }

  let obj = {
    name: 'John',
    age: 30,
    phone:1234567,
    address: { ...address },
    arr: [10, 5, 3],
    state: [
      { name: 'karnataka' },
      { name: 'tamilnadu' },
      { name: 'kerela' }
    ]

  }
  console.log(obj)

  return (
    <div>
      <h2>NAME:-{obj.name}</h2>
      <h2>AGE:-{obj.age}</h2>
      <h2>ARR:-{obj.arr}</h2>
      <h2>PHONE:-{obj.phone}</h2>
      {
        obj.state.map((st, index) => {
          const { name } = st
          return (
            <h2>STATE:-{name}</h2>
          )
        })
      }
    </div>
  )
}

export default App;
