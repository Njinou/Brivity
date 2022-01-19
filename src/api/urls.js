const urls = {
    auth:{
        signup:'https://brivity-react-exercise.herokuapp.com/users',
        login:'https://brivity-react-exercise.herokuapp.com/users/sign_in'
    },
    dashboard:{
        fetch:{
            posts: 'https://brivity-react-exercise.herokuapp.com/posts',
            comments:(post_id)=>`https://brivity-react-exercise.herokuapp.com/posts/${post_id}/comments`
        },
        create:{
            posts:'https://brivity-react-exercise.herokuapp.com/posts',
            comments:'https://brivity-react-exercise.herokuapp.com/comments',
        },
        edit:{
            posts:(post_id)=>`https://brivity-react-exercise.herokuapp.com//posts/${post_id}`,
            comments:(comment_id)=>`https://brivity-react-exercise.herokuapp.com/comment/${comment_id}`,
        },
        delete:{
            posts:(post_id)=>`https://brivity-react-exercise.herokuapp.com//posts/${post_id}`,
            comments:(comment_id)=>`https://brivity-react-exercise.herokuapp.com/comments/${comment_id}`,
        },
        details:{
            posts:(post_id)=>`https://brivity-react-exercise.herokuapp.com/posts/${post_id}`,
            comments:'https://brivity-react-exercise.herokuapp.com/',
        }
    }
};
export default urls;