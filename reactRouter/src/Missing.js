import React from 'react'
import { Link } from 'react-router-dom';

const Missing = () => {
    return (
        <main className='Missing'>
            <h2>게시물을 찾을 수 없습니다.</h2>
            <p>아쉬워요ㅠㅠ</p>
            <p>
                <Link to='/'>홈페이지에 방문하세요.</Link>
            </p>
        </main>
    )
}

export default Missing;