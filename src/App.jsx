import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Welcome name="Daddy" pic="https://images.unsplash.com/photo-1564156280315-1d42b4651629?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGFkZHl8ZW58MHx8MHx8&w=1000&q=80"/>
      </div>
  );
}
function Welcome({name, pic}){
  return(
    <div>
      <img className= "User-pic" src={pic}  alt={name}/>
       <h1>
         Hello <span className = "name">{name}</span>🤩
        </h1>
    </div>
  )
};
