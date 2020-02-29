import React from 'react';
import axios from 'axios';
import Animal from './Animal'

class FetchDog extends React.Component {
    state = {dog: "" }

    getDog = async () => {
        try {
            let res = await axios.get(`https://dog.ceo/api/breeds/image/random`)
            debugger
            let dogPic = res.data.message
            this.setState({dog: dogPic})
        } catch(error) {
            console.log(error)
        
        }
    }



    render() {
        const displayDog = this.state.dog
       
        return(
            <div>
                <h2>Random Dog Image</h2>
                <Animal img={displayDog}/>
                <button onClick={this.getDog}>Get Dog</button>
            </div>
        )
    }
}

export default FetchDog;