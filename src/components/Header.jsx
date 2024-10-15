import blogIcon from '../assets/blog-icon.png'

function Header() {
    return(
        <header>
            <div id="logo">
                <img src={blogIcon} alt="blog logo"/>
                <h2>Simple Blog</h2>
            </div>

            <a href="/login" id='login_btn'>Login</a>
        </header>
    )
}

export default Header