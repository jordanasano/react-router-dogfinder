import { useParams } from "react-router-dom"

function DogDetails({dogList}) {
    const { name } = useParams();
    const dog = (dogList.filter(dog => dog.name === name))[0];

    return (
        <div>
            <p>{dog.name}</p>
            <p>{dog.age}</p>
            <img src={`/${dog.src}.jpg`} alt={dog.name} />
            { dog.facts.map(fact => <p>{fact}</p>) }
        </div>
    );
}


export default DogDetails;