import React from 'react'
import axios from 'axios'

import SearchBar from './SearchBar'
import ImageList from './ImageList'

class App extends React.Component{ // HANYA DAPAT MENAMPILKAN 1 BUAH DIV

        state={
            images:[]
        }


    // res.data.results[0].urls.regular
    onSearchSubmit=(searchQuery)=>{

        //request menggunakan axios
        //Axios is a library used to request data using rest API
        axios.get("https://api.unsplash.com/search/photos", { 
            headers:{ //ini untuk authorization, karena dalam API unplash harus ada authentication dahulu
                Authorization: 'Client-ID 1c54890258233c33ac7365ee05bfdf027f4f1d8a283d42c311fe576e88f4a2f0' //Client-ID berasal dari KEYS AUTH dari unplash
            },
            params:{ //params itu harus dimasukkan (documentation: https://unsplash.com/documentation#search-photos)
                query: searchQuery //ini adalah search word yang akan dimasukkan ke unplashs
            }
        }).then((res) => {
            this.setState({images:res.data.results})
        })
    }

    
    render(){
        return(
            <div className="container">
                <SearchBar imageFn={this.onSearchSubmit}/>
                <ImageList hasilImages={this.state.images}/>
            </div>
        )
    }
}

export default App