// Assets
import githubIcon from '../assets/github-icon.png'

// Styles
import '../styles/component-styles/footer.css'

function Footer() {
    return (
        <footer>
            <div id="footer-logo">
                <img src="" />
                <h2>Simple Blog</h2>
            </div>

            <p className="footer-text">
                This blog platform is designed to prioritize simplicity
                and to allow users to interact with posts in a straightforward and functional way.
                Users can view individual blog posts,
                each displaying the full content along with the number of likes and dislikes,
                and the date and time the post was made.
            </p>

            <div id="credits">
                <h3>Developed by: José Mathias </h3>
                <div id="contact">
                    <a href="https://github.com/JoMath363" target="_blank">
                        <img src={githubIcon} alt="Github" />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer