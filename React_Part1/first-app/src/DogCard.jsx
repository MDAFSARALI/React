// import Image from "./Image";
// function DogCard(){ // Default Export
//     return( 
//     <div>
//         <h3>Brune--A Dog Name</h3>
//         {/* <Image/> */}
//         <Image src="https://plus.unsplash.com/premium_photo-1666229410352-c4686b71cea2?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZG9nc3xlbnwwfHwwfHx8MA%3D%3D" />
//         <Image src="https://plus.unsplash.com/premium_photo-1668114375111-e90b5e975df6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZG9nc3xlbnwwfHwwfHx8MA%3D%3D" />
//     </div>
// );
// }

// export default DogCard;





import Image from './Image'
const DogCard = (props) => {
  return (
    <div>
      <h3>{props.name}</h3>
      <Image src={props.src}></Image>
    </div>
  )
}

export default DogCard
