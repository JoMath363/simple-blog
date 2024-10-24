import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

// Assets
import likeIcon from '../assets/like-icon.png'
import dislikeIcon from '../assets/dislike-icon.png'

// Components
import Footer from "../components/Footer";
import Header from "../components/Header";

// Styles
import '../styles/page-styles/post-page.css'

function PostPage() {
    const [post, setPost] = useState({})

    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:5555/posts/${id}`);
                const result = await response.json()
                setPost(result)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchData()
    }, [])

    const likePost = () => {
        const postData = {
            title: post.title,
            content: post.content,
            likes: String(post.likes + 1),
            dislikes: String(post.dislikes)
        };

        ratePost(postData)
    }

    const dislikePost = () => {
        const postData = {
            title: post.title,
            content: post.content,
            likes: String(post.likes),
            dislikes: String(post.dislikes + 1)
        };

        ratePost(postData)
    }
    

    const ratePost = async (data) => {
        try {
            const response = await fetch(`http://localhost:5555/posts/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                location.reload()
            } else {
                console.log(response);
            }
        } catch (error) {
            alert('Error: ' + error.message);
        }
    }

    return (<>
        <Header />
        <main id="post_page">
            <h1 className="post-title">{post.title}</h1>
            <div className="post-status">
                <button className="rate-btn" onClick={() => likePost()}>
                    <img src={likeIcon} alt="Like" />
                    <span>{post.likes}</span>
                </button>
                <button className="rate-btn" onClick={() => dislikePost()}>
                    <img src={dislikeIcon} alt="Deslike" />
                    <span>{post.dislikes}</span>
                </button>
            </div>
            
            <p className="post-content">{post.content}</p>
        </main>
        <Footer />
    </>)
}

export default PostPage