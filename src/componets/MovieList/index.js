
import { Fragment, useEffect , useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./style.css"

export default function MovieList(props) {
    const {genreID  , title} =props
    const [data, setData] = useState([]);  
    const [loading, setLoading] = useState(false);
  
    useEffect(function () {
      setLoading(true);
      axios
        // .get("https://moviesapi.ir/api/v1/movies")
        .get(`https://moviesapi.ir/api/v1/genres/${genreID}/movies`)
        // .get("https://codeacademy.iran.liara.run/store/products/")   
        .then(function (response) {
          console.log(response.data);
          setData(response.data.data);
          setLoading(false);
        })
        .catch(function (error) {
          setLoading(false);
        });
    }, []);
  
    function renderFarm() {
      return data.map(function (items) {
        return (

        <li>    
          <img src={items.poster} alt={items.title} />
          <Link target="__blanck" to={`/m/${items.id}`}>
          <h4>{items.title}</h4>
        </Link>
            </li>   
        );
      });
    }

return (
    <Fragment>
        <h3>{title}</h3>
        <div className="container">{renderFarm()}</div>
    </Fragment>
);
}

