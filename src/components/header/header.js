import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <nav>
                <div className='container'>
                    <div className='navbar'>
                        <div>
                            <h1><Link to="/">Home</Link></h1>
                        </div>
                        <div className='button'>
                            <button className='btn1'><Link to='/login'>login</Link></button>
                            <button className='btn1'><Link to='/register'>register</Link></button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header;