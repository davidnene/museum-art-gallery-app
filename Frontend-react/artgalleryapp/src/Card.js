import { useState } from "react"

function Card({ title, image, altText, artistTitle, dateStart, dateEnd }) {
    const [ratingInput, setRatingInput] = useState(0)

    function handleOnChange(e) {
        setRatingInput(e.target.value)
    };
    const btn = "btn btn-success"
    function handleRatingSubmit(e) {
        e.preventDefault()
        e.target.reset()
        setRatingInput(0)
    }

    return (
        <div className='col-4'>
            <div className="card gx-1" style={{width: 23 + "rem", height: 32 + "rem"}}>
                <img style={{height: 220 + "px",width:220 + "px"}} src={image} className="card-img-top" alt={altText} title={altText}/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">Artist: {artistTitle}</p>
                    <p className="card-text">Date started: {dateStart} Date ended: {dateEnd}</p>
                    <p className="card-text">Rating {ratingInput}</p>
                    <form onSubmit={handleRatingSubmit}>
                    <input onChange={handleOnChange} type="range" class="form-range" min="0" max="10" step="2" id="customRange3" value={ratingInput}></input>
                    <input class="form-control" type="text" placeholder="Add comment here" aria-label="default input example" required></input><br/>
                    <button type = "submit" className= {btn} >Add rating</button>
                    </form>
                </div>
            </div>
        </div>
        
        )
}

export default Card