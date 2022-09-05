import './App.css';
import Records from './smartphons.json';


function App() {
  return (
    <div className="App">
      {Records.map(record=>{
        return(
          <div>
            <img src={record.img}/>
            {record.id}
          </div>
        )
      })}
    </div>
  );
}

export default App;
