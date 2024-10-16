import { useState } from 'react'
import { blogPosts } from '../services/test.js'

// Assets
import instaIcon from '../assets/instagram-icon.png'
import faceIcon from '../assets/facebook-icon.png'
import twitterIcon from '../assets/twitter-icon.png'
import leftArrowIcon from '../assets/left-arrow-icon.png'
import rightArrowIcon from '../assets/right-arrow-icon.png'

// Components
import Header from "../components/Header.jsx";
import Post from '../components/Post.jsx';
import Footer from '../components/Footer.jsx'

function HomePage() {
    const [page, setPage] = useState(0)
    const posts = blogPosts.slice(page, page + 10)

    function prevPage() {
        if (page > 0){
            setPage(p => p - 10)
            window.scrollTo(0, 0);
        }  
    }

    function nextPage() {
        if (page < blogPosts.length - 10){
            setPage(p => p + 10)
            window.scrollTo(0, 0);
        }
    }

    return (<>
        <Header />
        <main id="home">
            <section id='home_topbar'>
                <h1>Posts</h1>

                <div className="contact">
                    <a><img src={instaIcon} /></a>
                    <a><img src={faceIcon} /></a>
                    <a><img src={twitterIcon} /></a>
                </div>
            </section>

            <section id='posts_grid'>
                {posts.map((p, i) => <Post key={i} {...p} />)}
            </section>

            <section id='posts_nav'>
                <button onClick={() => prevPage()}>
                    <img src={leftArrowIcon} />
                    <span>Prev</span>
                </button>
                <button onClick={() => nextPage()}>
                    <span>Next</span>
                    <img src={rightArrowIcon} />
                </button>
            </section>
        </main>
        <Footer/>
    </>)
}

export default HomePage