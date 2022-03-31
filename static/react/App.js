import { React, useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom'
import PropTypes from 'prop-types';
// Comment component receives three functions as props,
// these will be used to modify the comments state variable
function Comment(
  {
    movieID, rating, comment, onChangeRating, onChangeComment, onClickDelete,
  },
) {
  return (
    <div>
      <span className="id-label">
        Movie ID:
        {` ${movieID}`}
      </span>
      <input type="number" value={rating} className="number-input" onChange={onChangeRating} />
      <input type="text" value={comment} onChange={onChangeComment} />
      <button type="button" onClick={onClickDelete}>Delete</button>
    </div>
  );
}

Comment.propTypes = {
  movieID: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  comment: PropTypes.string.isRequired,
  onClickDelete: PropTypes.func.isRequired,
  onChangeComment: PropTypes.func.isRequired,
  onChangeRating: PropTypes.func.isRequired,
};

function App() {
  // stores an array of comment objects
  const [comments, setComments] = useState([]);

  // stores username fetched from the server
  const [userName, setUsername] = useState('');

  function handleDelete(index) {
    const newComments = comments.slice();
    newComments.splice(index, 1);
    setComments(newComments);
  }

  // edit the text of a comment
  function handleCommentInput(e, index) {
    const newComments = comments.slice();
    newComments[index].comment = e.target.value;
    setComments(newComments);
  }

  // edit the rating of a review
  // Restricts the value of the rating to be from 0-10
  // Any NaN value (caused by backspacing the input) defaults to 0
  function handleRatingInput(e, index) {
    const newComments = comments.slice();
    const rating = parseInt(e.target.value, 10);
    if (Number.isNaN(rating) || rating < 0) {
      newComments[index].rating = 0;
    } else if (rating > 10) {
      newComments[index].rating = 10;
    } else {
      newComments[index].rating = rating;
    }
    setComments(newComments);
  }

  // Upon clicking the submit button, Send a post request to the server with the
  // updated comment JSON, and alert the server's returned response
  function saveChanges() {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(comments),
    };
    fetch('/update', requestOptions)
      .then((response) => response.json())
      .then((data) => { alert(data); })
      .catch((error) => { console.error('Error:', error); }); // eslint-disable-line no-console
  }

  // On initial load of the page, load the state variables with comment data and the username
  // of the currently logged in user
  useEffect(() => {
    fetch('/comments')
      .then((response) => response.json())
      .then((data) => { setComments(data); })
      .catch((error) => { console.error('Error:', error); }); // eslint-disable-line no-console
    fetch('/username')
      .then((response) => response.json())
      .then((data) => { setUsername(data); })
      .catch((error) => { console.error('Error:', error); }); // eslint-disable-line no-console
  }, []);

  return (
    <div>
      <Link to="/testpage">Go to testpage</Link> <br />
      <Link to="/testpage1">Go to testpage1</Link>
      <ul>
        <li className="username">
          <span>Logged in as: </span>
          <b>{userName}</b>
        </li>
        <li className="movie-link">
          <a href="/movie">Go to movies page</a>
        </li>
      </ul>
      <div className="main">
        <h1>Your Reviews:</h1>
        {comments.map(
          (comment, index) => (
            <Comment
              key={comment.movie_id.toString()}
              movieID={comment.movie_id.toString()}
              rating={comment.rating}
              comment={comment.comment}
              onClickDelete={() => handleDelete(index)}
              onChangeComment={(e) => handleCommentInput(e, index)}
              onChangeRating={(e) => handleRatingInput(e, index)}
            />
          ),
        )}
        <br />
        <button type="submit" onClick={saveChanges}>Save Changes</button>
      </div>
      <Outlet />
    </div>
  );
}

export default App;