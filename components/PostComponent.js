import React from 'react';
import PostAction from '../actions/PostAction';

export default class PostComponent extends React.Component {
    handlerChangeTitle() {
        PostAction.changeTitle(this.refs.title.value);
    }

    render () {
        return (
                <div>
                    <input type="text" onChange={this.handlerChangeTitle.bind(this)} ref="title" />
                    <div>{this.props.post.title}</div>
                </div>
        );
    }
}
