// Assets
import likeIcon from '../assets/like-icon.png'
import dislikeIcon from '../assets/dislike-icon.png'

// Styles
import '../styles/component-styles/post.css'

function Post(params) {
    return(
        <a href={`/post/${params._id}`} className="post">
            <h2>{params.title}</h2>
            <p>{params.content.substring(0, 200) + '...'}</p>
            <div className="status">
                <div className="rate-btn">
                    <img src={likeIcon} alt="Like" />
                    <span>{params.likes}</span>
                </div>
                <div className="rate-btn">
                    <img src={dislikeIcon} alt="Deslike" />
                    <span>{params.dislikes}</span>
                </div>
            </div>
        </a>
    )
}

export default Post