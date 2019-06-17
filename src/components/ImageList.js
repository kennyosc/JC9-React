import React from 'react'

class ImageList extends React.Component{ // WAJIB RETURN SATU BUAH DIV
    
    showImages(imageUrl){
        return(
                <img src={imageUrl} alt="Unplash"/>
        )
    }
    
    render(){
        return( 
            <div>
                {this.props.hasilImages.map(imageUrl => this.showImages(imageUrl))}
            </div>
        )
        }
}

export default ImageList;