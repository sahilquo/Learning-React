import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: 'My First Blog', body: 'Lorem ipsum.....', author: 'Sahil', id: 1 },
        { title: 'My Second Blog', body: 'Lorem ipsummmm.....', author: 'Palvi', id: 2 },
        { title: 'My Third Blog', body: 'Loremmmmm ipsum.....', author: 'Parag', id: 3 }
    ])

    return (
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs" />

        </div >
    );
}

export default Home;