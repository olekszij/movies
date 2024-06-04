// Import the CSS file for styling the app
import './App.css'

// Import the JSON file containing the movie data
import movies from './data.json'

// Define the main component function
function App() {
  // Log the movie data to the console for debugging purposes
  console.log(movies);

  // Render the main component
  return (
    // Create a container div to hold all the sections
    <div className="container">
      {/* Map over the movie data and create a section for each category */}
      {movies.map((elem) => {
        return (
          // Create a section for each category
          <section key={elem.category}>
            {/* Create a heading for each category */}
            <h2>{elem.category}</h2>
            {/* Create a div to hold the images for each category */}
            <div className="images">
              {/* Map over the images for each category and create a div for each image */}
              {elem.images.map((image, index) => {
                return (
                  // Create a div for each image
                  <div key={index}>
                    {/* Create an image element for each image */}
                    <img src={image} alt="" />
                  </div>
                );
              })}
            </div>
          </section>
        );
      })}
    </div>
  );
}

// Export the main component as the default export
export default App
