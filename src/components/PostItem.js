import React from 'react';

function PostHeader({author, date}){
    return(
        <div className="post-header">
            <img className="avatar" src={author.avatar}/>
            <div className="details">
                <span>{author.name}</span>
                <span>{date}</span>
            </div>
        </div>
    );
}

function PostComment({comments}){
    return(
        <div className="post-comment">
            <div className="divider"/>
            {comments.map(comment => (
                <div key={comment.id} class="comment">
                    <img src={comment.author.avatar} className="avatar"/>
                    <p>
                        <span>{comment.author.name}</span>
                        {comment.content}
                    </p>
                </div>
            ))}
        </div>
    );
}

function PostItem({author, date, comments, content}){
    return(
        <div className="post">
            <PostHeader author={author} date={date}/>
            <p className="post-content">{content}</p>
            <PostComment comments={comments}/>
        </div>
    );
}

export default PostItem;