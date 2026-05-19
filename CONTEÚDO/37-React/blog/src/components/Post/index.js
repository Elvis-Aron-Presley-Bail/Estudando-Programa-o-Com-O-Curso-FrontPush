
function Post(props) {

    return(
        <div className="post mx-2">
            <div className="img-post"></div>
            <h5>{props.subtitle}</h5>
            <h3>{props.title}</h3>
            <p className="mt-1">
                {props.children}
            </p>
            <div className="flex pt-3">
                <div className="img-profile"></div>
                <div className="desc-profile ml-2 mt-1">
                    <h6 className="color-blue">Fulano de tal</h6>
                    <p>
                        Aug 2, 2020 - 8 min read
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Post