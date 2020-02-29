import React from 'react';
import axios from 'axios';
import Animal from './Animal'

class FetchCat extends React.Component {
    state = {cat: "" }

    getCat = async () => {
        try {
            let res = await axios.get(`https://api.thecatapi.com/v1/images/search?limit=6&page=1&order=Desc`)
            debugger
            let catPic = res.data[0].url
            this.setState({cat: catPic})
        } catch(error) {
            console.log(error)
        
        }
    }


    render() {
        const displayCat = this.state.cat
       
        return(
            <div>
                <h2>Random Cat Image</h2>
                <Animal img={displayCat}/>
                <button onClick={this.getCat}>Get Cat</button>
            </div>
        )
    }
}

export default FetchCat;