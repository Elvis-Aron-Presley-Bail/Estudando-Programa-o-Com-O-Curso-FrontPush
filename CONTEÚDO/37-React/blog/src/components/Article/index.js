
import Post from "../Post";

function Article() {

    return(
        <section className="container">
            <h3>Articles</h3>
            <div className="container-post mt-5">
                <Post />
                <Post />
                <Post />
            </div>
        </section>
    );
}

export default Article