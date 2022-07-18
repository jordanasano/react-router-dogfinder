import axios from "axios";
import {useState} from "react";
import {v4 as uuid} from "uuid";

/** Make ajax request to get list of dogs and displays them 
 * 
 *  Props: none
 *  State: dogList
 * 
 *  App -> DogList
 */
function DogList() {
    console.log("DogList rendered.")
    const [dogList, setDogList] = useState([]);

    async function getDogs() {
        const dogList = (await axios.get("http://localhost:5001/dogs")).data;
        dogList.map(dog =>  ({...dog, id:uuid()}))
        setDogList(st => dogList);
    }
    
    if(dogList.length === 0) getDogs();
    
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