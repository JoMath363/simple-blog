import { useState, useEffect } from 'react'

// Components
import Header from '../components/Header';

// Styles
import '../styles/page-styles/admin-page.css'

function AdminPage() {
    const [postsList, setPostsList] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5555/posts');
                const result = await response.json()
                setPostsList(result.data.reverse())
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchData()
    }, [])

    const [target, setTarget] = useState(null)

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
            title.value = ''
            content.value = ''

            const response = await fetch('http://localhost:5555/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(postData)
            });

            if (response.ok) {
                alert('Post submitted successfully!');
                location.reload()
            } else {
                alert('Failed to submit post');
            }
        } catch (error) {
            alert('Error: ' + error.message);
        }
    }

    const selectTarget = (e) => {
        const items = document.getElementsByClassName('pl-item')
        for (let item of items) {
            item.classList.remove('active')
        }

        e.target.classList.add('active')

        setTarget(e.target.value)
    }

    const deleteTargetPost = async (e) => {
        e.preventDefault();

        if (target == null){
            alert('Select a Post to Delete')
        }

        try {
            const response = await fetch(`http://localhost:5555/posts/${target}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
            });

            if (response.ok) {
                alert('Post deleted successfully!');
                location.reload()
            } else {
                alert('Failed to delete post');
            }
        } catch (error) {
            alert('Error: ' + error.message);
        }
    }

    return (<>
        <Header />
        <main id='admin_page'>
            <form className='admin-form'>
                <h1>Add Post</h1>
                <label htmlFor="title_input">Title:</label>
                <input id="title_input" type="text" required />

                <label htmlFor="content_input">Content:</label>
                <textarea id="content_input" type="text" required />

                <button onClick={(e) => addNewPost(e)}>Post</button>
            </form>

            <div className='admin-form'>
                <h1>Delete Post</h1>

                <div id='post_list'>
                    {postsList.map((p, i) =>
                        <button className='pl-item'
                            onClick={(e) => selectTarget(e)}
                            key={i} value={p._id}>{p.title}
                        </button>)}
                </div>

                <button onClick={(e) => deleteTargetPost(e)}>Delete</button>
            </div>
        </main>
    </>)
}

export default AdminPage