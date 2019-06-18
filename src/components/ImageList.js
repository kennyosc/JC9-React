import React from 'react'

class ImageList extends React.Component{ // WAJIB RETURN SATU BUAH DIV
    
    showImages(){
            var hasil = this.props.hasilImages.map((item)=>{
                return(
                    <div className="d-flex justify-content-center">
                        <img src={item.urls.regular}
                        style={{maxWidth:'700px'}} alt='Unsplash' className='m-2'/>
                    </div>
                )
            })

        return hasil
    }
    
    render(){
        return( 
                <div>
                    {this.showImages()}
                </div>
            )
        }
    }

export default ImageList;