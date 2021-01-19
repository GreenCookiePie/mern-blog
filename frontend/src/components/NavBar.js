import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav className="navbar bg-dark container">
            <h4><Link to="/">Home</Link></h4>
            <h4><Link to="/posts">Posts</Link></h4>
            <h4><Link to="/create">Create</Link></h4>
        </nav>
    )
}