import React from 'react'

class SearchBar extends React.Component{ // WAJIB RETURN SATU BUAH DIV

    state={
        keyword: ""
    }
    onSubmitForm = (event) => { //event adalah object yang diinput oleh React secara otomatis
        // console.log(event)
        event.preventDefault()  //.preventDefault() adalah method yang dibuat oleh React secara otomatis UNTUK  MENGHALANGI UNTUK WINDOW REFRESH

        this.props.imageFn(this.state.keyword)

    }

    // onChange itu digunakan ketika kalau ada yang input baru, maka function atau apapun akan dijalankan.
    // ini dapat digunakan di search bar ketika user input atau baru ketik, maka Search akan langsung berjalan
    
    render(){
        return( //hanya boleh return 1 div. tidak dapat membuat 2 atau lebih div yang terpisah

            //untuk yang {this.onSubmitForm} itu tidak perlu pakai (), karena kalau pakai (), function tersebut akan langsung dijalankan
            <div>
                <form onSubmit={this.onSubmitForm} className="form-group mt-5">
                    <input type="text" className="form-control" placeholder="Type Here"
                     
                    onChange= {(event)=>{
                        this.setState({keyword:event.target.value}
                        )}}/>
                </form>
            </div>
        )
    }
}

export default SearchBar;