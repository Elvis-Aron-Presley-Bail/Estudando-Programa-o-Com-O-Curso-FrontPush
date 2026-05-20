
function Post(props) {
    return(
        <>
            <div className="postagem ml-p mr-p">
                <h3 className="mb-p">{props.subtitle}</h3>
                <h1>{props.title}</h1>
                <p>{props.children}</p>
                <div className="info-post mt-p">
                    <div className="img-perfil"></div>
                    <div className="mt-p ml-p">
                        <h5>Fulano de tal</h5>
                        <h6>Aug 2, 2020 - 8 min read</h6>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Post