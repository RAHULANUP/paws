import React,{ useState } from "react";

function Main(){
    const [image,setImage] = useState("./images/dog.png");
    async function generateImage(){
        const response = await fetch("https://dog.ceo/api/breeds/image/random");
        const data = await response.json();
        setImage(data.message);
    }
    
    const handleOnClick = () => {
        generateImage();
    }
    
    
    return(
        <>
            <section className="home" id="home">
                <div className="home-content">
                    <h1>Generate <span>COOL DOG</span> Images</h1>
                    <h3>scroll down</h3>
                </div>
                <img className="home-img" src="./images/homeimg.png" alt="home-image" />
            </section>

            <section className="generate">
                <img className="main-img" src={image} /> 
                <div>
                    <button onClick={handleOnClick}>GENERATE IMAGE</button>
                </div>           
            </section>
        </>
    )
}

export default Main;