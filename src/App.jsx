import './App.css'
import Header from './components/Header'
import movies from './data.json'
 
function App() {
  console.log(movies);
  return (
    <>
    <Header />
    <div className="container">
      {movies.map((elem) => {
        return (
          <section key={elem.category}>
            <h2>{elem.category}</h2>
            <div className="images scroll-container">
              {elem.images.map((image, index) => {
                return (
                  <div key={index}>
                    <img src={image} alt="" />
                  </div>
                );
              })}
            </div>
          </section>
        );
      })}
    </div>
    </>
  );
}
export default App
