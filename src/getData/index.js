import { Link } from "react-router-dom";
import { useState ,useEffect, Fragment } from "react";
import axios from "axios";
import MovieList from "../componets/MovieList";
import "./style.css"

export default function Homepage() {
    const [data,setData] =useState([]);
    

    useEffect(function(){
        axios 
        .get("https://moviesapi.ir/api/v1/movies")
        .then(function(response){
            setData(response.data.data)
            console.log(response.data.data);
        })
        .catch(function(error) {
            alert("we have one error ")
        })

    },[])

    function renderFarm() {
        return data.map(function(Items) {
            return (
                <li>
                <img src={Items.poster} />
                <h3>{Items.title}</h3>

                </li>
            )
        })
    }
    return (
        <Fragment>
            <div className="menu-namava">
                <div className="right">
                    <p>نماوا</p>
                    <p>فیلم ها</p>
                    <p>سریال ها</p>
                    <p>دسته بندی </p>
                    <p>تازه ها </p>
                    <p>کودکان </p>
                    <p>پردیس نماوا</p>
                    <p>نماوا مگ</p>
                    
                </div>
                <div className="left">
                    <a href="#">خرید اشتراک</a>
                    <a href="#">ورود و ثبت نام</a>
                </div>
            </div>

    <MovieList genreID="1" title = "ویژه" />
    <MovieList genreID="2" title = "رایگان در نماوا" />
    <MovieList genreID="3" title = "تازه های نماوا" />
    <MovieList genreID="4" title = "سریال های به روزشده" />
    <MovieList genreID="5" title = "سریال های ایرانی" />
    <MovieList genreID="6" title = "ایرانی" />
    <MovieList genreID="7" title = "برترین فیلم ها" />
    <MovieList genreID="8" title = "تازه های نماوا" />
    <MovieList genreID="9" title = "سریال های متارلیک " />
    <MovieList genreID="10" title = "آموزش و سرگرمی" />
    <MovieList genreID="11" title = "اکشن" />


            <div>Footer</div>
        </Fragment>
    )
}