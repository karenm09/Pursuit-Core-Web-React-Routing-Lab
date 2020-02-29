import React from 'react';
import axios from 'axios';
import Animal from './Animal';
import MultipleDogs from './MultipleDogs'


class FetchMultipleDogs extends React.Component {
    state = {
        num: "",
        dogs: []
    }

    getMultipleDogs = async () => {
        try {
            let res = await axios.get(`https://dog.ceo/api/breeds/image/random/`)
            debugger
            let dogs = res.data.message
            this.setState({dogs: dogs}) 
        } catch(error) {
            console.log(error)
        }
    }

    render() {
        let multipleDogPics = this.state.dogs.map((dog, index) => {
            return <Animal img={dog.message} key={index}/>
        })

        return(
            <div>
                {multipleDogPics}
            </div>
        )
    }

}

export default FetchMultipleDogs;