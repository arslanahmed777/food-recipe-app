import React,{useState,useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'
import {RecipeApi} from './RecipeApi'


export const SearchBar = () => {
    const {addTransaction} = useContext(GlobalContext);
    const [search,setSearch] = useState('');
    const [loading,setLoading] = useState(false);
    const handler = (e) =>{
        e.preventDefault();
        RecipeApi(search)
        .then(function(res){
            //.log(res.data.hits);
            setLoading(true);
            addTransaction(res.data.hits);
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
                        {loading?<h1>asdf</h1>:""}
                        
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
