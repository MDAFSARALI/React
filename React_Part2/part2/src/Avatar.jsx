function Avatar({src,height,width,children}){
    return(
        <>
            <img src={src} height={height} width={width}></img>
            {children}
        </>
    )
}

export default Avatar;