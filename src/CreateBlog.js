import { useState } from "react";
import { useHistory } from "react-router-dom";

const CreateBlog = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('palvi');
    const [isPending, setPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isPending) {
            const blog = { title, body, author };
            setPending(true);
            fetch('http://localhost:8000/blogs', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(blog)
            }).then((response) => {
                console.log('new blog added');
                setPending(false);
                history.push('/');
            });
        }
    };

    return (
        <div className="create-blog">
            <h2>Add New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input
                    type='text'
                    required
                    value={title}
                    onChange={(e) => { setTitle(e.target.value) }}
                />
                <label>Blog Body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => { setBody(e.target.value) }}
                />
                <label>Blog Author:</label>
                <select
                    value={author}
                    onChange={(e) => { setAuthor(e.target.value) }}>
                    <option value='sahil'>Sahil</option>
                    <option value='palvi'>Palvi</option>
                </select>
                <button>{`${isPending ? 'Adding Blog' : 'Add Blog'}`}</button>
            </form>
        </div>
    );
}

export default CreateBlog;