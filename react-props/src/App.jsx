import Users from "./Users";

function App() {

  const users = [
    { id: 1, name: "Jone Dor", age: "30" , course:["html", "css"]},
    { id: 2, name: "John Doe", age: "30",  course:[ "css", "js"]},
    { id: 3, name: "John Doe", age: "30" ,  course:[ "js", "react"]},
  ];

  const country = ["INDIA", "UK", "USA", "CANADA"];

  const color = ["RED" , "BLUE" , "BLACK" , "PURPLE" , "GREEN"];

  return (
    <div>
      <Users
        kunjal={users}
        cou={country}
        color={color}
      />

    </div>
  )
}

export default App
