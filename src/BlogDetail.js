import { useParams, useHistory } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetail = () => {
    const { id } = useParams();
    const { data: blog, isDataLoading, errorMessage } = useFetch(`http://localhost:8000/blogs/${id}`);
    const history = useHistory();

    const onDeleteBlog = () => {
        fetch(`http://localhost:8000/blogs/${blog.id}`, {
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        })
    };

    return (
        <div className="blog-detail">
            {errorMessage && <div>{errorMessage}</div>}
            {isDataLoading && <div>Loading.....</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={onDeleteBlog}>Delete Blog</button>
                </article>
            )}
        </div>
    );
}

export default BlogDetail;