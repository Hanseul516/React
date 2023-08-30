import React from 'react'
import { handleSubmit } from './App'; 

const NewPost = ({ handleSubmit, postTitle, setPostTitle, postBody, setPostBody }) => {
    return (
        <main className='NewPost'>
            <h2>게시물 작성하기</h2>
            <form className='newPostForm' onSubmit={handleSubmit}>
                <label htmlFor='postTitle'>제목:</label>
                <input
                    id='postTitle'
                    type='text'
                    required
                    value={postTitle}
                    onChange={(e) => setPostTitle(e.target.value)}/>
                <label htmlFor='postBody'>내용:</label>
                <textarea
                    id='postBody'
                    required
                    value={postBody}
                    onChange={(e)=> setPostBody(e.target.value)}/>
                <button type='submit'>확인</button>
            </form>
        </main>
    )
}

export default NewPost;
