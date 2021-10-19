import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: 'My First Blog', body: 'Lorem ipsum.....', author: 'Sahil', id: 1 },
        { title: 'My Second Blog', body: 'Lorem ipsummmm.....', author: 'Palvi', id: 2 },
        { title: 'My Third Blog', body: 'Loremmmmm ipsum.....', author: 'Sahil', id: 3 }
    ])

    const deleteBlog = (blogId) => {
        const newBlogs = blogs.filter((blog) => blog.id !== blogId);
        setBlogs(newBlogs);
    }

    const [name, setName] = useState("Sahil")

    useEffect(() => {
        console.log(`Hello useEffect Here ${name}`)
    }, [name])

    return (
        <div className="home">
            <button onClick={() => setName("Garg")}>Change Name</button>
            <BlogList blogs={blogs} title="All Blogs" deleteBlog={deleteBlog} />
        </div >
    );
}

export default Home;