import blogIcon from '../assets/blog-icon.png'
import '../styles/component-styles/header.css'

function Header() {
    return(
        <header>
            <a href="/" id="logo">
                <img src={blogIcon} alt="blog logo"/>
                <h2>Simple Blog</h2>
            </a>

            <a href="/login" id='login_btn'>Post</a>
        </header>
    )
}

export default Header