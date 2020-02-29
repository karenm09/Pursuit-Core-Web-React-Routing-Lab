import React from 'react';
import axios from 'axios';
import Animal from './Animal';

class FetchMultipleDogs extends React.Component {
    state = {
        dogs: []
    }

    componentDidMount() {
        this.getMultipleDogs()
    }

    getMultipleDogs = async () => {
        let imgNum = this.props.match.params.num
        try {
            let res = await axios.get(`https://dog.ceo/api/breeds/image/random/${imgNum}`)
            debugger
            let dogs = res.data.message
            this.setState({dogs: dogs}) 
        } catch(error) {
            console.log(error)
        }
    }

    render() {
        let multipleDogPics = this.state.dogs.map((dog, index) => {
            // debugger
            return <Animal img={dog} key={index}/>
        })

        return(
            <div>
                {multipleDogPics}
            </div>
        )
    }

}

export default FetchMultipleDogs;