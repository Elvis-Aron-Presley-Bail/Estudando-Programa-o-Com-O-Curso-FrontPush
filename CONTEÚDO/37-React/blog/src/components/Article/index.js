
import Post from "../Post";

function Article() {

    return(
        <section className="container">
            <h3>Articles</h3>
            <div className="container-post mt-5">
                <Post subtitle="tecnologia" title="O guia definitivo sobre o blog">
                    1aaaaaaaaaaaaaaaaaaaaaaaaaaaa
                    aaaaaaaaaaaaaaaaaaaaaaaaaaaa
                    aaaaaaaaaaaaaaaaaaaaaaaaaaaa
                    aaaaaaaaaaaaaaaaaaaaaaaaaaaa
                </Post>
                <Post subtitle="fotografia" title="Quais as melhores câmeras em 2021?">
                    2aaaaaaaaaaaaaaaaaaaaaaaaaaaa
                    aaaaaaaaaaaaaaaaaaaaaaaaaaaa
                    aaaaaaaaaaaaaaaaaaaaaaaaaaaa
                    aaaaaaaaaaaaaaaaaaaaaaaaaaaa
                </Post>
                <Post subtitle="cinema" title="Os 10 filmes com maior bilheteria">
                    3aaaaaaaaaaaaaaaaaaaaaaaaaaaa
                    aaaaaaaaaaaaaaaaaaaaaaaaaaaa
                    aaaaaaaaaaaaaaaaaaaaaaaaaaaa
                    aaaaaaaaaaaaaaaaaaaaaaaaaaaa
                </Post>
            </div>
        </section>
    );
}

export default Article