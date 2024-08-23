export function Image(){//Name  Export
    return <img src="http://ts4.mm.bing.net/th?id=OIP.MspR0N-41CXzKc-yLmD7FAHaE9&pid=15.1" alt="Dog Img" />
}

function DogCard(){ // Default Export
    return( 
    <div>
        <h3>Brune--A Dog Name</h3>
        <Image/>
        <Image/>
    </div>
);
}

export default DogCard;