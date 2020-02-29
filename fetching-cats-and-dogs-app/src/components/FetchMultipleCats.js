import React from 'react';
import axios from 'axios';
import Animal from './Animal';

class FetchMultipleCats extends React.Component {
    state = {
        cats: []
    }

    componentDidMount() {
        this.getMultipleCats()
    }

    getMultipleCats = async () => {
        let imgNum = this.props.match.params.num
        try {
            let res = await axios.get(`https://api.thecatapi.com/v1/images/search?limit=${imgNum}&page=1&order=Desc`)
            let cats = res.data
            this.setState({cats: cats}) 
        } catch(error) {
            console.log(error)
        }
    }

    render() {
        let multipleCatPics = this.state.cats.map((cat, index) => {
            return <Animal img={cat.url} key={index}/>
        })

        return(
            <div>
                {multipleCatPics}
            </div>
        )
    }

}

export default FetchMultipleCats;