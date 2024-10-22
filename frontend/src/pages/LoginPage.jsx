import '../styles/page-styles/login-page.css'

function LoginPage() {
    return(<>
        <main id='login_page'>
            <section id="login_container">
                <h1>Login</h1>
                <label htmlFor="user_input">Usuário:</label>
                <input id="user_input"/>

                <label htmlFor="password_input">Senha:</label>
                <input id="password_input"/>

                <button>Entrar</button>
            </section>
        </main>
    </>)
}

export default LoginPage