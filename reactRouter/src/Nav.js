import { Link } from 'react-router-dom'

const Nav = ({ search, setSearch }) => {
    return (
        <nav className="Nav">
            <form className='searchForm' onSubmit={(e) => e.preventDefault()}>
                <label htmlFor='search'>게시물 검색</label>
                <input
                    id='search'
                    type='text'
                    placeholder='게시물을 검색하세요'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)} />
            </form>
            <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/post'}>Post</Link></li>
                <li><Link to={'/about'}>About</Link></li>
            </ul>
        </nav>
    )
}

export default Nav