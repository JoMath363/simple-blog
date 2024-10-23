import Header from '../components/Header';
import '../styles/page-styles/admin-page.css'

function AdminPage() {
    const addNewPost = async (e) => {
        e.preventDefault();

        const title = document.getElementById('title_input');
        const content = document.getElementById('content_input');

        const postData = {
            title: title.value,
            content: content.value,
            likes: '0',
            dislikes: '0'
        };

        try {
            const response = await fetch('http://localhost:5555/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(postData)
            });

            title.value = ''
            content.value = ''

            if (response.ok) {
                alert('Post submitted successfully!');
            } else {
                alert('Failed to submit post');
            }
        } catch (error) {
            alert('Error: ' + error.message);
        }
    }

    return (<>
        <Header />
        <main id='admin_page'>
            <form id="admin_container">
                <h1>Add New Post</h1>
                <label htmlFor="title_input">Title:</label>
                <input id="title_input" type="text" required />

                <label htmlFor="content_input">Content:</label>
                <textarea id="content_input" type="text" required />

                <button onClick={(e) => addNewPost(e)}>Post</button>
            </form>
        </main>
    </>)
}

export default AdminPage