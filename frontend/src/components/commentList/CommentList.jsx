import React from 'react'
import './commentList.css'

const CommentList = ({data}) => {
  return (
    <div>
        {
          data?.comments_list?.length === 0 ? 
          <p style={{ textAlign: "center", padding: "3rem 0" }}>No goals found. Maybe add one?</p> :
          data.comments_list?.reverse().map((comment) => (
            <div className="comment-box" key={comment._id}>
              <div className="comment-box__head">
                <section className="head__name">{comment.username}</section>
                <section className="head__datetime">{comment.time.slice(8,10)}-{comment.time.slice(5,7)}-{comment.time.slice(0,4)}</section>
              </div>
              <div className="comment-box__body">{comment.comment}</div>
            </div>
          ))
        }
    </div>
  )
}

export default CommentList