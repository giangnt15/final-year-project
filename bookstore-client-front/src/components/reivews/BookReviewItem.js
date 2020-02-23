import React, { useState } from 'react'
import { Comment, Tooltip, Icon, Avatar, Rate } from 'antd';
import moment from 'moment';
import { DATE_TIME_VN_24H } from '../../constants';

function BookReviewItem(props) {

    const { id, reviewHeader, reviewText, rating, author, createdAt, updatedAt } = props.review;

    const action = null;

    const actions = [
        <span key="comment-basic-like">
            <Tooltip title="Like">
                <Icon
                    type="like"
                    theme={action === 'liked' ? 'filled' : 'outlined'}
                //   onClick={this.like}
                />
            </Tooltip>
            <span style={{ paddingLeft: 8, cursor: 'auto' }}>{/*likes*/100}</span>
        </span>,
        <span key=' key="comment-basic-dislike"'>
            <Tooltip title="Dislike">
                <Icon
                    type="dislike"
                    theme={action === 'disliked' ? 'filled' : 'outlined'}
                //   onClick={this.dislike}
                />
            </Tooltip>
            <span style={{ paddingLeft: 8, cursor: 'auto' }}>{/*dislikes*/10}</span>
        </span>,
        <span key="comment-basic-reply-to">Reply to</span>,
    ];

    return (
        <Comment
            actions={actions}
            author={<a>{author.username}</a>}
            avatar={
                <Avatar
                    src={author.avatar ? author.avatar : "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"}
                    alt={author.username}
                />
            }
            content={
                <div className="review-content">
                    <div className="review-content-rating">
                        <Rate value={rating} defaultValue={0} disabled style={{ fontSize: 10 }} allowHalf />
                    </div>
                    <div className="review-header p-b-10">
                        <h5>{reviewHeader}</h5>
                    </div>
                    <div className="review-text">
                        <p>{reviewText}</p>
                    </div>
                </div>
            }
            datetime={
                <Tooltip title={moment(createdAt).format(DATE_TIME_VN_24H)}>
                    <span>{moment(createdAt).locale('vi').fromNow()}</span>
                </Tooltip>
            }
        />
    )
}

export default BookReviewItem;