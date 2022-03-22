// create your App component here
import React, {useState, useEffect} from "react"

function App (){
    const [dogImage, setDogImage] = useState('')
    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json())
        .then(dogImage => setDogImage(dogImage.message))
        const img = dogImage
    }, [])
    
    return(
        <body>
            <div>
                <p>
                    Loading...
                    <img src={dogImage} alt="A Random Dog"></img>
                </p>
            </div>
        </body>
    ) 
}

export default App;