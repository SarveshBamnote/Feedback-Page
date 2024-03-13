import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {emojiClicked: false}

  onClickEmoji = () => this.setState({emojiClicked: true})

  render() {
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    const {emojiClicked} = this.state

    return (
      <div className="bg-container">
        {!emojiClicked && (
          <div className="card-container">
            <h1 className="heading">
              How satisfied are you with our customer support performance?
            </h1>
            <ul className="emoji-container">
              {emojis.map(each => (
                <li
                  className="emoji-list-container"
                  onClick={this.onClickEmoji}
                  key={each.id}
                >
                  <img className="emoji" src={each.imageUrl} alt={each.name} />
                  <p className="name">{each.name}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
        {emojiClicked && (
          <div className="thanks-container">
            <img className="emoji" src={loveEmojiUrl} alt="love emoji" />
            <h1 className="heading">Thank You</h1>
            <p className="desc">
              We will use your feedback to improve our customer support
              performance.
            </p>
          </div>
        )}
      </div>
    )
  }
}
export default Feedback
