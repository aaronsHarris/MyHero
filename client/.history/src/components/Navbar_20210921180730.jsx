import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({ toggle }) => {
  return (
    <nav className='flex justify-between items-center h-16 bg-base-300 text-white sticky top-0 shadow-lg font-sans z-10' role='navigation'>
      <svg className="max-h-20 flex max-w-sm m-0 p-0" id="Capa_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><g><g id="XMLID_75_"><path d="m375.47 188.244-119.47 206.929-119.471-206.929z" fill="#f9dfe5"/></g><g id="XMLID_74_"><path d="m375.47 188.244-119.47-178.244-119.471 178.244z" fill="#f2beca"/></g><g id="XMLID_73_"><path d="m375.47 188.244-119.47-178.244 215.965 123.445z" fill="#f9dfe5"/></g><g id="XMLID_72_"><path d="m136.53 188.244 119.47-178.244-215.965 123.445z" fill="#f9dfe5"/></g><g id="XMLID_71_"><path d="m375.47 188.244-119.47 206.929 215.965-19.783z" fill="#ec9eb0"/></g><g id="XMLID_70_"><path d="m375.47 188.244 96.495-54.799v241.945z" fill="#ec9eb0"/></g><g id="XMLID_69_"><path d="m136.53 188.244-96.495-54.799v241.945z" fill="#ec9eb0"/></g><g id="XMLID_68_"><path d="m256 502v-106.827l215.965-19.783z" fill="#e67e95"/></g><g id="XMLID_67_"><path d="m256 502v-106.827l-215.965-19.783z" fill="#e67e95"/></g><g id="XMLID_66_"><path d="m136.53 188.244 119.47 206.929-215.965-19.783z" fill="#ec9eb0"/></g></g><g><path d="m476.927 124.764-215.965-123.446c-3.074-1.758-6.851-1.758-9.925 0l-215.964 123.446c-3.115 1.78-5.038 5.094-5.038 8.682v241.944c0 3.549 1.881 6.832 4.942 8.627l215.965 126.61c1.562.916 3.31 1.373 5.058 1.373s3.496-.458 5.058-1.373l215.965-126.61c3.062-1.795 4.942-5.078 4.942-8.627v-241.945c0-3.588-1.923-6.901-5.038-8.681zm-426.892 25.861 73.205 41.573-73.205 141.976zm250.965 47.619h57.15l-102.15 176.929-102.15-176.929h57.15c5.523 0 10-4.477 10-10s-4.477-10-10-10h-55.729l100.729-150.283 100.729 150.283h-55.729c-5.523 0-10 4.477-10 10s4.477 10 10 10zm-63.313 185.21-181.964-16.669 81.302-157.681zm137.287-174.351 81.303 157.682-181.964 16.669zm3.633-34.141-90.576-135.135 163.734 93.59zm-245.214.001-73.157-41.546 163.734-93.59zm112.607 229.336v80.247l-162.23-95.108zm20 0 162.23-14.861-162.23 95.108zm122.76-212.102 73.205-41.573v183.55z"/><circle cx="256" cy="188.244" r="10"/></g></g></svg>
      <Link to='/' className='pl-8 text-2xl'>MyHero</Link>
      <div className="px-4 cursor-pointer md:hidden"
        onClick={toggle}>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
      </div>

      <div className="lg:flex pr-8 md:block hidden">
        <Link className="p-4" to="/">Home</Link>
        <Link className="p-4" to="/new"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" /></svg></Link>
        <Link className="p-4" to="/Tavern"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg></Link>
      </div>
    </nav>
  )
}

export default Navbar
