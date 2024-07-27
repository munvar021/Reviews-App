// Write your code here

import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {activeReviewIndex: 0}

  onClickLeftArrow = () => {
    const {activeReviewIndex} = this.state

    if (activeReviewIndex > 0) {
      this.setState(prevState => ({
        activeReviewIndex: prevState.activeReviewIndex - 1,
      }))
    }
  }

  onClickRightArrow = () => {
    const {activeReviewIndex} = this.state
    const {reviewsList} = this.props

    if (activeReviewIndex < reviewsList.length - 1) {
      this.setState(prevState => ({
        activeReviewIndex: prevState.activeReviewIndex + 1,
      }))
    }
  }

  render() {
    const {activeReviewIndex} = this.state
    const {reviewsList} = this.props
    const reviewDetails = reviewsList[activeReviewIndex]

    return (
      <div className="bg-container">
        <h1 className="main-heading">Reviews</h1>
        <div className="review-container">
          <button
            className="button-indicators"
            onClick={this.onClickLeftArrow}
            type="button"
            data-testid="leftArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          <div className="review-details">
            <img
              src={reviewDetails.imgUrl}
              className="user-profile"
              alt={reviewDetails.username}
            />
            <p className="user-name">{reviewDetails.username}</p>
            <p className="user-company">{reviewDetails.companyName}</p>
            <p className="user-review-info">{reviewDetails.description}</p>
          </div>
          <button
            className="button-indicators"
            onClick={this.onClickRightArrow}
            type="button"
            data-testid="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel

// getReviewDetails = review => {
//   const {imgUrl, username, companyName, description} = review
//   return (
//     <div className="review-details">
//       <img src={imgUrl} className="user-profile" alt={username} />
//       <p className="user-name">{username}</p>
//       <p className="user-company">{companyName}</p>
//       <p className="user-review-info">{description}</p>
//     </div>
//   )
// }
// {this.getReviewDetails(reviewDetails)}
