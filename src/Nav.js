import { Link } from "react-router-dom";

function Nav({dogList}) {
  console.log(dogList)
  return (
    <nav className="NavBar">
      <Link to="/">
        DogList
      </Link>
      {dogList.map(dog =>(
        <Link to={`/dogs/${dog.name}`}>{dog.name}</Link>
      ))}

    </nav>
  );
}

export default Nav;
