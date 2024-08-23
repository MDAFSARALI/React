// import './App.css';
// // import DogCard from './DogCard';

// import DogCard from './DogCard';
// function App() {
//   return (
//     <div className="App">
//       {/* <Image/> */}
//       <DogCard/>
//       {/* <Image/> */}
//     </div>
//   );
// }

// export default App;


import React from 'react'
import DogCard from './DogCard'
const App = () => {
  return (
    <div>
      <DogCard name="Bruvo" src="https://images.unsplash.com/photo-1601758063541-d2f50b4aafb2?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRvZ3N8ZW58MHx8MHx8fDA%3D"/>
      <DogCard name="Tiger" src="https://plus.unsplash.com/premium_photo-1668606763482-8dd2042c934e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGRvZ3N8ZW58MHx8MHx8fDA%3D"/>
    </div>
  )
}

export default App

