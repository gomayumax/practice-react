import { ReduceStore } from 'flux/utils';
import PostDispathers from '../dispathers/PostDispathers';
import PostType from '../types/PostType';

class PostStore extends ReduceStore {
    getInitialState() {
        return {
            title: 'goma'
        }
    }
    reduce (state, action) {
        switch (action.type) {
            case PostType.changeTitle:
                state.title = action.title;
                return Object.assign({}, state);
                console.log('store:' + action.title);
            default:
                return state;
        }
    }
}

const postStore = new PostStore(PostDispathers);
export default postStore; 
