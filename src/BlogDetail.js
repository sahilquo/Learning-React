import { useParams } from "react-router";
import useFetch from "./useFetch";

const BlogDetail = () => {
    const { id } = useParams();
    const { data: blog, isDataLoading, errorMessage } = useFetch(`http://localhost:8000/blogs/${id}`);

    return (
        <div className="blog-detail">
            {errorMessage && <div>{errorMessage}</div>}
            {isDataLoading && <div>Loading.....</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                </article>
            )}
        </div>
    );
}

export default BlogDetail;