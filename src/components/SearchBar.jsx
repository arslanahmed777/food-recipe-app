import React,{useState,useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'
import {RecipeApi} from './RecipeApi'
import Loader from 'react-loader-spinner'


export const SearchBar = () => {
    var typeArray = ["Audio","Ball-Triangle","Bars","Circles","Grid","Hearts","Oval","Puff","Rings","TailSpin","ThreeDots"];
      
    var randomType = typeArray[Math.floor(Math.random()*typeArray.length)];
    const {addTransaction} = useContext(GlobalContext);
    const {loading} = useContext(GlobalContext);
    const {isLoading} = useContext(GlobalContext);
    console.log(loading);
    const [search,setSearch] = useState('');
    const handler = (e) =>{
        isLoading(true)
        e.preventDefault();
        RecipeApi(search)
        .then(function(res){
            //.log(res.data.hits);
            addTransaction(res.data.hits);
            isLoading(false)
            setSearch('')
        })
        .catch(function(err){
            console.log(err);
        })
    }
    return (
        <React.Fragment>
            <div className="container">
                <br/>
                <div className="row justify-content-center">
                    <div className="col-12 col-md-10 col-lg-8">

                        <p  className="h1 text-center text-warning">Yummly</p>
                        <p>By Arslan Ahmed Shaad</p>
                        <form className="card card-sm" onSubmit={handler}>
                            <div className="card-body row no-gutters align-items-center">
                                <div className="col-auto">
                                    <i className="fas fa-search h4 text-body"></i>
                                </div>
                                <div className="col">
                                    <input value={search} onChange={(e)=> setSearch(e.target.value)} className="form-control form-control-lg" type="search" placeholder="chicken,egg,fish" />
                                </div>
                                <div className="col-auto">
                                    <button className="btn btn-lg btn-success" type="submit">Search</button>
                                </div>
                            </div>
                        </form>
                        <div className="text-center">
                            {loading && <Loader type={randomType} color="#00BFFF" height={100} width={100}   />}
                        </div> 
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
