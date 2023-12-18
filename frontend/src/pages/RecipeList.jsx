import React, { useEffect, useState } from 'react'
import RecipeCard from '../components/RecipeCard'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useDispatch } from 'react-redux'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import { URL } from '../constants'



const newUrl = `${URL}/recipe/`

const pata = [{
    "_id":"1a",
    "image": [
        "https://www.joyousapron.com/wp-content/uploads/2021/03/Mee-Goreng-Sq-2.jpg"
    ],
    "category": "Asian",
    "title": "Mee Goreng (Fried Noodles Indian-Style)",
    "ingredients": [
        "5, oz Oil noodles or spaghetti",
        "2 ,tb Oil",
        "4 oz Peeled prawns or skinless boned chicken; diced meat",
        "1, sm Onion; chopped",
        "4, oz Cabbage; sliced",
        "1 ,sm Tomato; sliced",
        "1. 4, inch piece celery; chopped",
        "2, Cloves garlic; crushed",
        "1, Chilli; crushed",
        "1/2 ,Boiled potato; diced",
        "1, Egg; beaten",
        "1, tb Tomato ketchup",
        "2, tb Soy sauce",
        "1/4 ,ts Salt",
        "1/2 ,ts Sugar",
        "4 ,oz Beansprouts",
        "1 ,Lemon; juice of",
        "2, Sprigs coriander; chopped, up to 3"
    ],
    "servings": 1,
    "instructions": "If using spaghetti, cook it in boiling water until just tender, then drain and toss in a tablespoon of olive oil to stop it sticking together. No need to prepare the oil noodles. Heat the oil in a wok or frying pan and fry the garlic, onion, cabbage, celery, potato and prawns or chicken. Add the noodles and stir fry for 10 minutes more. Make a gap in the centre of the noodles and add the egg. Stir it in to scramble it. Add the chilli, tomato, tomato ketchup, soy sauce, salt and sugar. Stir well. Just before transferring to a plate, add the beansprouts and stir for about 30 seconds. Sprinkle with lemon juice and chopped coriander to serve."
},]

const state = {
    sort:null,
    category:[],
    search:null,
}

const RecipeList = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [params, setParams] = useState(state);
    const [data, setData] = useState([]);
    
    useEffect(()=>{
        axios.get(newUrl,{
            params:params,
        })
        .then((res)=>{setData(res.data["data"])})
        .catch((error)=>console.log(error));
    }, [params])

    console.log(data)
  return (
    <div>
        <Navbar />
        <div className='sorting-container' > 
            <div>

            </div>

        </div>
        <div className='recipe-container' >
            {data.map((el)=>{
                return <RecipeCard key={el["_id"]} {...el} />
            })}
        </div>
        <Footer />
    </div>
  )
}

export default RecipeList