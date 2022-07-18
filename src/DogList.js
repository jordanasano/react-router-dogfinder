import { Link } from "react-router-dom";

/**
 *
 *  Props: dogList
 *  App -> DogList
 * renders page that lists all dogs and dog details
 */
function DogList({ dogList }) {

    return (
        <ul>
            {dogList.map(dog => (
                <li key={dog.id}>
                    <Link to={`/dogs/${dog.name}`}>
                        <p>{dog.name}</p>
                        <p>{dog.age}</p>
                        <img src={`/${dog.src}.jpg`} alt={dog.name} />
                        {dog.facts.map(fact => <p>{fact}</p>)}
                    </Link>
                </li>

            ))}
        </ul>
    );
}

export default DogList;
