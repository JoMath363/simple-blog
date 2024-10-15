import { blogPosts } from '../services/test.js'

import Header from "../components/Header";
import Post from '../components/Post.jsx';

function HomePage() {
    return(<>
        <Header/>
        <main id="home">
            <section id='posts_grid'>
                {blogPosts.map((p, i) => <Post key={i} {...p}/>)}
            </section>
        </main>
    </>)
}

export default HomePage