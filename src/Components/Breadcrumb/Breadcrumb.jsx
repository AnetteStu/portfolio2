import { NavLink, useLocation } from "react-router-dom";

export default function Breadcrumb() {
  const location = useLocation()
  let splitPath
  let projectPath
  
  // console.log(location);

  if (location.pathname) {
    splitPath = location.pathname.split("/")
    // console.log(splitPath);
  }
  
  if (location.state !== null) {
    projectPath = location.state.data.name
    // console.log("On a project path!");
  }
  return (
    <ul className="breadcrumb">
      <li>
        <NavLink
        to="/"
        className={({isActive, isPending}) =>
        isPending ? "pending" : isActive ? "active" : ""}
        >Home
        </NavLink>
      </li>
      {splitPath.length > 2 
      ? 
      <li>
          <NavLink
          to={`/${splitPath[1]}`}
          className={({isActive, isPending}) =>
          isPending ? "pending" : isActive ? "active" : ""}
          > {splitPath[1]}
          </NavLink>
        </li>
       : 
      <li>
        {splitPath[1]}
      </li>
       }

      {!projectPath ? "" : 
        <li>
          {projectPath}
        </li>
      }

      {/* {splitPath
      ? 
        <li>
          <NavLink
          to="/"
          className={({isActive, isPending}) =>
          isPending ? "pending" : isActive ? "active" : ""}
          >Home
          </NavLink>
        </li>
      : 
      <li>
        <NavLink
         to="/"
         className={({isActive, isPending}) =>
         isPending ? "pending" : isActive ? "active" : ""}
         >Home
        </NavLink>
      </li>}
      {!splitPath ? null : 
        <li>
          <NavLink
          to={`/${splitPath[1]}`}
          className={({isActive, isPending}) =>
          isPending ? "pending" : isActive ? "active" : ""}
          >
          </NavLink>
        </li>
        }
      {projectPath} */}
    </ul>
  )
}



{/* <li>
<NavLink
to={`/${splitPath[1]}`}
className={({isActive, isPending}) =>
isPending ? "pending" : isActive ? "active" : ""}
>{splitPath[1]}
</NavLink>
</li> */}