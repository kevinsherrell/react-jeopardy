import React, {Component} from 'react';
import Axios from 'axios';

class GameContainer extends Component {
    state = {
        question: null,
        score: null,
        error: null,
        answerRevealed: false,
    }


    componentDidMount =()=>{
        // get 1 random question
        Axios.get('http://jservice.io/api/random?count=1')
            .then(question => {
                this.setState({
                    question: question.data[0]
                },()=>console.log(this.state.question));
            })
            .catch(err => {
            console.log(err);
            this.setState({
                error: err
            },()=>console.log(this.state));
        })
    }

    render() {
console.log(this.state)
        return (
            <div>
                <button>Decrease</button>
                <button>Increase</button>
                <button>Reset</button>
                {/*<p className="category">{category.title}</p>*/}
                {/*<p className="question">{this.state.question.question}</p>*/}
                <p className="answer">{this.state.question.answer}</p>
            </div>
        )
    }
}

export default GameContainer;