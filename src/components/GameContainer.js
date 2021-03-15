import React, {Component} from 'react';
import Axios from 'axios';
import '../app.css';

class GameContainer extends Component {
    state = {
        answerRevealed: false,
        score: 0
    }


    getQuestion = () => {
        // get 1 random question
        Axios.get('http://jservice.io/api/random')
            .then(question => {
                this.setState({
                    ...question.data[0]
                }, () => console.log(this.state));
            })
            .catch(err => {
                this.setState({
                    error: err
                }, () => console.log(this.state.error));
            })
    }
    revealAnswer = () => {
        console.log('revealanswer')
        this.setState({
            answerRevealed: !this.state.answerRevealed
        })
    }
    increaseScore = () => {
        if (this.state.question) {
            this.setState({
                score: this.state.score += this.state.value,
            });
        }

    }
    decreaseScore = () => {
        if (this.state.question) {
            this.setState({
                score: this.state.score -= this.state.value,
            });
        }

    }
    resetScore = () => {
        this.setState({
            score: 0
        })
    };

    render() {
        console.log(this.state.question)
        return (
            <div>
                <div className={'scoreContainer'}>
                    <h2>Score: {this.state.score}</h2>
                    <button onClick={this.decreaseScore}>Decrease</button>
                    <button onClick={this.increaseScore}>Increase</button>
                    <button onClick={this.resetScore}>Reset</button>
                </div>
                <div className={'getQuestion'}>
                    <h1>Let's Play!</h1>
                    <button onClick={this.getQuestion}>Get Question</button>
                </div>

                {this.state.question &&
                <>
                    <p className="category">Category: {this.state.category && this.state.category.title}</p>
                    <p className="question">Question: {this.state.question && this.state.question}state</p>
                </>
                }
                <div className="revealAnswer">
                    <button onClick={this.revealAnswer}>reveal answer!</button>
                    {this.state.answerRevealed &&
                    <p className={'answer'}>Answer: {this.state.answer && this.state.answer}</p>
                    }
                </div>

            </div>
        )
    }

}

export default GameContainer;