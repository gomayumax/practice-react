import PostDispathers from '../dispathers/PostDispathers';
import PostType from '../types/PostType';

export default class PostAction {
    static changeTitle(title) {
        PostDispathers.dispatch({
            type: PostType.changeTitle,
            title: title
        });
    }
}
