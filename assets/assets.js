
import add from './add.png';
import arrow from './arrow.png';
import blog_post1 from './blog_post1.jpg';
import blog_post2 from './blog_post2.jpg';
import blog_post3 from './blog_post3.jpg';
import blog from './blog.png';
import email from './email.png';
import logo from './logo.png';
import upload from './upload.jpg';

export default{ add, arrow, blog_post1, blog_post2, blog_post3, blog, email, logo, upload };

export const blog_data = [{
    id: 1,
    title: "How to make aesthatic nails",
    description: "lorem ipsum dummy text how to do nailies so pretty so pink.",
    image: blog_post1,
    date: Date.now(),
    category: "Beauty"
}, 
{
    id: 2,
    title: "How to arrange ur folders",
    description: "simple guide on how to arrange ur melody charms hanging on the folders looking so cute as per usual.",
    image: blog_post2,
    date: Date.now(),
    category: "Education"
},
{
    id: 3,
    title: "How to make personalized phone case",
    description: "another day another slay now look at how cute the phone case it's so pinkie.",
    image: blog_post3,
    date: Date.now(),
    category: "Decoration"
} ];