
/** Make ajax request to get list of dogs and displays them
 *
 *  Props: none
 *  State: dogList
 *
 *  App -> DogList
 */
function DogList({dogList}) {


    //FIXME: Key doesn't work for some reason
    return (
        <ul>
            {dogList.map(dog => (
                <li key={dog.id}>
                    <p>{dog.name}</p>
                    <p>{dog.age}</p>
                    <img src={`${dog.src}.jpg`} alt={dog.name} />
                    {dog.facts.map(fact => <p>{fact}</p>)}
                </li>
            ))}
        </ul>
    )
}

export default DogList;
