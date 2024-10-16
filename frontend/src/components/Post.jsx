// Assets
import likeIcon from '../assets/like-icon.png'
import dislikeIcon from '../assets/dislike-icon.png'

// Styles
import '../styles/post.css'

function Post(params) {
    return(
        <a href={`/post/${params.id}`} className="post">
            <h2>{params.title}</h2>
            <p>{params.content}</p>
            <div className="status">
                <button className="rate-btn">
                    <img src={likeIcon} alt="Like" />
                    <span>{params.likes}</span>
                </button>
                <button className="rate-btn">
                    <img src={dislikeIcon} alt="Deslike" />
                    <span>{params.dislikes}</span>
                </button>
            </div>
        </a>
    )
}

export default Post