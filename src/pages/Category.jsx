import React from 'react';
import { Link } from 'react-router-dom';
import img from './../assets/Client-First - IMAGES/two-women-in-front-of-dry-erase-board-1181533-1.svg'
import logo01 from "./../assets/icon2.png"
import logo03 from './../assets/Client-First - icons/icon.svg'
import logo02 from './../assets/Client-First - icons/Icon-1.svg'
import logo04 from './../assets/Client-First - icons/business-and-trade 1.svg'

const Category = () => {
  const posts = [
    {
      title: "Top 6 free website mockup tools 2022",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.",
      category: "Business",
      image: img 
    },
    {
      title: "Step-by-step guide to choosing great font pairs",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.",
      category: "Business",
      image: img 
    },
    {
      title: "Ten free Google fonts that you should use",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.",
      category: "Business",
      image: img 
    },
    {
      title: "What did I learn from doing 50+ design sprints?",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.",
      category: "Business",
      image: img 
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="text-center mb-12 md:mb-24 h-60 md:h-72 w-full bg-offWhite">
        <h1 className="text-3xl md:text-4xl font-bold text-primary pt-12 md:pt-16 mb-2 md:mb-4">Business</h1>
        <p className="text-sm text-lightGrey pb-2 md:pb-4 leading-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
          <br className="hidden md:block" /> 
          eiusmod tempor incididunt ut labore.
        </p>
        <p className="text-xs md:text-sm text-primary mt-2 md:mt-2 pb-8 md:pb-20 font-bold tracking-widest">BLOG &gt; BUSINESS</p>
      </div>
      <div className="mr-4 md:mr-16 ml-4 md:ml-16 mx-auto px-4">
        {/* Main Content */}
        <div className="flex flex-col md:flex-row gap-10">
          {/* Blog Posts */}
          <div className="md:w-4/5  md:mb-24">
            {posts.map((post, index) => (
              <div key={index} className="mb-8 md:mb-10 flex flex-col md:flex-row items-start">
                <img className="w-full md:w-1/3 h-48 md:h-60 object-cover mb-4 md:mb-0 md:mr-6" src={post.image} alt={post.title} />
                <Link to='/blog-post'>
                  <div>
                    <p className="text-xs md:text-sm font-semibold text-secondary mb-2 md:mb-4 mt-1 md:mt-4 uppercase tracking-widest">{post.category}</p>
                    <h2 className="text-2xl md:text-4xl font-bold text-primary mb-2 md:mb-4">{post.title}</h2>
                    <p className="text-sm md:text-base text-gray-600">{post.description}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* Sidebar */}
          <div className="md:w-1/5">
            <div className="mb-10">
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4 md:mb-6">Categories</h3>
              <div className="flex flex-col space-y-3">
                <div className="text-sm md:text-lg text-dark flex items-center border border-neutral-400 w-full md:w-60 hover:bg-accent hover:border-accent font-bold p-2">
                  <img className='rounded w-8 md:w-12 mr-2' src={logo01} alt="" />
                  Startup
                </div>
                <div className="text-sm md:text-lg text-dark flex items-center border border-neutral-400 w-full md:w-60 hover:bg-accent hover:border-accent font-bold p-2">
                  <img className='w-8 md:w-12 mr-2 rounded-lg bg-offWhite' src={logo02} alt="" />
                  Business
                </div>
                <div className="text-sm md:text-lg text-dark flex items-center border border-neutral-400 w-full md:w-60 hover:bg-accent hover:border-accent font-bold p-2">
                  <img className='w-8 md:w-12 mr-2 rounded-lg bg-offWhite' src={logo03} alt="" />
                  Economy
                </div>
                <div className="text-sm md:text-lg text-dark flex items-center border border-neutral-400 w-full md:w-60 hover:bg-accent hover:border-accent font-bold p-2">
                  <img className='w-8 md:w-12 mr-2 rounded-lg bg-offWhite' src={logo04} alt="" />
                  Technology
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-primary mb-4 md:mb-6">All Tags</h3>
              <div className="flex flex-wrap gap-2 md:gap-3 mb-8">
                {['Business', 'Experience', 'Screen', 'Technology', 'Marketing', 'Life'].map((tag, index) => (
                  <a key={index} href="#" className="text-xs md:text-sm font-medium text-gray-600 border border-neutral-500 rounded-full px-5 py-1 md:px-7 md:py-2">
                    {tag}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
