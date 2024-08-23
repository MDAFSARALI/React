// import React from 'react'

// const Image = (props) => {
//     return <img src={props.src} alt="Dog Img" />;
// }

// export default Image;




import React from 'react'

const Image = (props) => {
  return (
    <div className='image-box'> 
    {/* Camel Case className */}
      <img src={props.src} alt="Images" />
    </div>
  )
}

export default Image
