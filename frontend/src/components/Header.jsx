import blogIcon from '../assets/blog-icon.png'
import '../styles/header.css'

function Header() {
    return(
        <header>
            <div id="logo">
                <img src={blogIcon} alt="blog logo"/>
                <h2>Simple Blog</h2>
            </div>

            <a href="/login" id='login_btn'>Post</a>
        </header>
    )
}

export default Header