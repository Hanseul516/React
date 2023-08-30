import React from 'react'
import { useParams, Link } from 'react-router-dom';

const PostPage = ({ posts, handleDelete }) => {
    const { id } = useParams();
    const post = posts.find(post => (post.id).toString() === id)
    return (
        <main className='PostPage'>
            <article className='post'>
                {post &&
                    <>
                        <h2>{post.title}</h2>
                        <p className='postDate'>{post.datetime}</p>
                        <p className='postBody'>{post.body}</p>
                        <button onClick={() => handleDelete(post.id)}>게시물 삭제하기</button>
                    </>}
                {!post &&
                    <>
                        <h2>게시물을 찾을 수 없습니다.</h2>
                        <p>아쉬워요ㅠㅠ</p>
                        <p>
                            <Link to='/'>홈페이지에 방문하세요.</Link>
                        </p>
                    </>}
            </article>
        </main>
    )
}

export default PostPage;