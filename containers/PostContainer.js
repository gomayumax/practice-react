import { Container } from 'flux/utils';
import React from 'react';
import PostComponent from '../components/PostComponent';
import PostStore from '../stores/PostStore';

class PostContainer extends React.Component {
    static getStores() {
        return [PostStore];
    }

    static calculateState() {
        return {
            post: PostStore.getState()
        };
    }

    render () {
        return (
                <PostComponent post={this.state.post} />
        );
    }
}

const postContainer = Container.create(PostContainer);
export default postContainer;
