import { React, useState } from 'react';

function RecommandationPage()
{
    const [cuisine, setCuisine] = useState("");
    const [dishType, setDishType] = useState("");

    // handle for cuisine change from input box
    const handleCuisineChange = (e) => {
        setCuisine(e.target.value);
        console.log(e.target.value);
    };

    // handle for dishType change from input box
    const handleDishTypeChange = (e) => {
        setDishType(e.target.value);
        console.log(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault('');
        fetch('/recommandation', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          // eslint-disable-next-line quote-props
          body: JSON.stringify({ 'cuisine': cuisine, 'dish_type': dishType }),
        })
          .then((response) => response.json())
          .then((response) => {
            console.log(response)
          });
      };
    

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label for="cuisines"></label>
                <select id="cuisines" onChange={(e) => handleCuisineChange(e)}>
                    <option value="Chinese">Chinese</option>
                    <option value="American">American</option>
                    <option value="Japanese">Japanese</option>
                    <option value="Spanish">Spanish</option>
                </select>
                <label for="dish_types"></label>
                <select id="dish_types" onChange={(e) => handleDishTypeChange(e)}>
                    <option value="main course">main course</option>
                    <option value="breakfast">breakfast</option>
                    <option value="appetizer">appetizer</option>
                </select>
            </form>
            <input type="submit" value="Get Recommandation" />
        </div>

    );
}

export default RecommandationPage