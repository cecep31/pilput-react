import { Link, Outlet, useLoaderData, Form } from "react-router-dom";
import { getContacts, createContact } from "../contacts";
import Navbar from '../components/Navbar'



export default function Root() {
 
  return (
    <>
      <div className="flex">
        <div id="sidebar">
          <h1>React Router Contacts</h1>
          <div>
            <form id="search-form" role="search">
              <input
                id="q"
                aria-label="Search contacts"
                placeholder="Search"
                type="search"
                name="q"
              />
              <div id="search-spinner" aria-hidden hidden={true} />
              <div className="sr-only" aria-live="polite"></div>
            </form>
            
          </div>
          
        </div>
        <div id="detail" className="mt-3 bg-slate-200">
         
        </div>
      </div>
    </>
  );
}
