function Sidebar()
{
    return(
        <aside className="sidebar">
        <nav className="nav">
          <ul>
            <li>
                    <nav className="nav">
                      <ul className="p-0">
                          <li >
                              <a href="/" className="listitems border-bottom cursor-pointer">Dashboard</a>
                          </li>
                          <li >
                              <a className="listitems border-bottom cursor-pointer">Users</a>
                          </li>
                          <li >
                              <a className="listitems border-bottom cursor-pointer">Categories</a>
                          </li>
                          <li >
                              <a href="/viewrestaurant" className="listitems border-bottom cursor-pointer">Restaurants</a>
                          </li>
                          <li >
                              <a href="/viewOffers" className="listitems border-bottom cursor-pointer">Offers</a>
                          </li>
                          <li >
                              <a href="/rating" className="listitems border-bottom cursor-pointer">Ratings</a>
                          </li>

                      </ul>
                    </nav>
            </li>
          </ul>
        </nav>
      </aside>
);
}
export default Sidebar;