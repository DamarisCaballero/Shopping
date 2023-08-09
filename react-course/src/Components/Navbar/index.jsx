import { NavLink } from "react-router-dom"
const NavBar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to='/'>
                        Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/'>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/'>
                    Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/'>
                    Accesorios
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/'>
                    Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/'>
                    Others
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
    }