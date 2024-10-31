import './App.css';
import {useState, useEffect} from 'react'


// リスト2-20

var data = {
  data: [
    {name:"Taro"},
    {name:"Hanako"},
    {name:"Sachiko"}
  ],
  message: "Hello",
}

function Message() {
  return (
    <p className = "ClassA"> {data.message}</p>
  )
}

function Data() {
  return (
    <ul>
      {data.data.map((item,key)=>{
        return(<li key={key} >{item.name}</li>)
      })}
    </ul>
  )
}

function App(props) {
  var [input, setInput] =useState("")

  const doChange = (event) => {
    setInput(event.target.value)
  }

  const doClick = () => {
    data.data.push({name:input})
    data.message = "you typed: \"" + input + "\"."
    setInput("")
  }

  return (
    <div className="App">
      <h1 className="ClassB">{props.title}</h1>
      <Message />
      <div>
        <input onChange={doChange} value={input} />
        <button onClick={doClick}>Click</button>
      </div>
      <Data />
    </div>
  )
}


// リスト2-19
// function Message(props) {
//   return (
//     <p className = "ClassA"> {props.message}</p>
//   )
// }

// function Data(props) {
//   return (
//     <ul>
//       {props.data.map((item,key)=>{
//         return(<li key={key} >{item.name}</li>)
//       })}
//     </ul>
//   )
// }

// function App(props) {
//   const data = [
//     {name:"Taro"},
//     {name:"Hanako"},
//     {name:"Sachiko"},
//   ]

//   return (
//     <div className="App">
//       <h1 className="ClassB">{props.title}</h1>
//       <Message message="This is sample message!"/>
//       <Data data={data}/>
//     </div>
//   )

//   return (
//     <div className="App">
//       <h1 className="ClassB">{props.title}</h1>
//     </div>
//   )
// }


// リスト2-18
// function App (props) {
//   var [count, setCount] = useState(0)
//   var [data, setData] = useState([
//     {
//       position: "absolute",
//       left:"0px", top:"0px",
//       width:"100%",height: "100%",
//       backgroundColor: "#fff0",
//     }
//   ])


//   const doClick = (event) => {
//     const ob = {
//       position: "absolute",
//       left:(event.pageX - 50) + "px",
//       top: (event.pageY - 50) + "px",
//       width: "100px",
//       height: "100px",
//       backgroundColor: "#ff000066",
//       borderRadius: "50%"
//     }
//     data.push(ob)
//     setCount(count + 1)
//   }

//   return (
//     <div className="App">
//       <h1>{props.title}</h1>
//       <p>{count} objects.</p>
//       <div onClick={doClick}>
//         {data.map((item,key)=>{
//           return(<div style={item} key={key}></div>)
//         })}
//       </div>
//     </div>
//   )
// }

// リスト2-17
// function App (props) {
//   var [flag, setFlag] = useState(true)

//   const doClick = (event) => {
//     setFlag(!flag)
//   }

//   return (
//     <div className="App">
//       <h1>{props.title}</h1>
//       <p className={flag ? "ClassA" : "ClassB"}>{flag ? "ON": "OFF"}
//         です。 </p>
//       <button className="button" onClick={doClick}>
//         Click
//       </button>
//     </div>
//   )
// }



// リスト2-15
// function App(props) {
//   const data = [
//     {name:"Taro", mail:"taro@yamada"},
//     {name:"Hanako", mail:"hanako@flower"},
//     {name: "Sachiko", mail:"sachico@happy"}
//   ]

//   return(
//     <div className="App">
//       <h1>{props.title}</h1>
//       <ul>
//         {data.map((item,key)=>{
//           return(<li>{item.name} [{item.mail}]</li>)
//         })}
//       </ul>
//     </div>
//   )
// }


// function App(props) {
//   const [input, setInput] = useState(1)
//   const [message, setMessage] = useState("整数を入力：")

//   const doInput = (event) => {
//     setInput(event.target.value)
//   }
  
//   useEffect(()=> {
//     var prime = true
//     if (input == 1) {
//       prime = false
//     } else {
//       for(var i =2; i<= input / 2;i++) {
//         if (input % i === 0) {
//           prime = false
//         }
//       }
//     }
//     setMessage(prime ? "※素数です。": "素数ではない")
//   }, [input])
//   return (
//     <div className="App">
//       <h1 className={props.color}>{props.title}</h1>
//       <p className={props.color, "clickable"}>{message}</p>
//       <div>
//         <input type="number" min="1" onChange={doInput} />
//       </div>
//     </div>
//   );
// }

export default App;
