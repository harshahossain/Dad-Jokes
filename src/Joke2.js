import React, { Component } from "react";
import './Joke.css';

class Joke2 extends Component {
//   constructor(props) {
//     super(props);
//     //console.log(props);
//   }

getColor(){
    if (this.props.votes >= 15) {
        return "#4CAF50";
      } else if (this.props.votes >= 12) {
        return "#8BC34A";
      } else if (this.props.votes >= 9) {
        return "#CDDC39";
      } else if (this.props.votes >= 6) {
        return "#FFEB3B";
      } else if (this.props.votes >= 3) {
        return "#FFC107";
      } else if (this.props.votes >= 0) {
        return "#FF9800";
      } else {
        return "#f44336";
      }
}
getEmoji() {
    if (this.props.votes >= 15) {
      return "em em-rolling_on_the_floor_laughing";
    } else if (this.props.votes >= 12) {
      return "em em-laughing";
    } else if (this.props.votes >= 9) {
      return "em em-smiley";
    } else if (this.props.votes >= 6) {
      return "em em-slightly_smiling_face";
    } else if (this.props.votes >= 3) {
      return "em em-neutral_face";
    } else if (this.props.votes >= 0) {
      return "em em-confused";
    } else {
      return "em em-angry";
    }
  }

  render() {
    return (
      <div className='Joke'>
        
        <div className='Joke-buttons'>
          <span className="vote-span" onClick={() => this.props.handleVote(this.props.id, 1)}>
            <i className='fas fa-arrow-up' />
          </span>{" "}
          <span className="Joke-vote" style={{ borderColor: this.getColor() }}>{this.props.votes}</span>
          <span className="vote-span" onClick={() => this.props.handleVote(this.props.id, -1)}>
            <i className='fas fa-arrow-down' />
          </span>{" "}
          {/* <i className='fas fa-arrow-down' onClick={()=>this.props.downvote(this.props.id, -1)}></i> */}
        </div>

          <div onClick={()=>this.props.handleRemove(this.props.id)} className='Joke-text'>{this.props.text}
              <span><i className='fa-solid fa-xmark'></i></span>
          </div>

            <div className="Joke-smiley">
            <i className={this.getEmoji()}/>
          </div>
      </div>
    );
  }
}

export default Joke2;