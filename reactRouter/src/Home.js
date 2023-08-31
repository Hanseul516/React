import Feed from './Feed'

const Home = ({ posts }) => {
    return (
        <main className="Home">
            {posts.length ? (
                <Feed posts={posts} />
            ) : (
                <p style={{ marginTop: "2rem" }}>
                    표시할 게시물이 없습니다.
                </p>
            )}
        </main>
    )
}

export default Home;