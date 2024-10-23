import '../styles/page-styles/login-page.css'

function LoginPage() {

    async function validate_login(params) {
        const user = document.getElementById('user_input').value
        const password = document.getElementById('password_input').value

        const response = await fetch(`http://localhost:5555/login?user=${user}&password=${password}`);
        if (response.status == 200){
            window.location.href = '/admin';
        } else {
            alert('Usuário ou senha incorretos.');
        }
    }


    return(<>
        <main id='login_page'>
            <section id="login_container">
                <h1>Login</h1>
                <label htmlFor="user_input">Usuário:</label>
                <input id="user_input" type="text"/>

                <label htmlFor="password_input">Senha:</label>
                <input id="password_input" type="password"/>

                <button onClick={() => validate_login()}>Enter</button>
            </section>
        </main>
    </>)
}

export default LoginPage