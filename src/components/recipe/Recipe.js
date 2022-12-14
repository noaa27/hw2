import './Recipe.css'
/**
 * title : string
 * description : string
 * image : {url:string, alt:str}
 * isDone : boolean
 * buttonClickCb : function
 */
function Recipe({ image, title, description, id, isDone, buttonClickCb }) {
    const textButton = isDone ? "EAT" : "PREPARE"
    return (
        <div className="Recipe">
        <img className='card-img-top, rounded, mx-auto d-block' src={image.url} alt={image.alt} />
        <div className='textt'>name: {title}</div>
        <div className='textt'>cooking method: {description}</div>
        <div className='textt'>dish number: {id}</div>
        <button type="button" class="btn btn-outline-primary" onClick={() => {
            buttonClickCb(id)
        }}>{textButton}</button>
        </div>
    );
}

export default Recipe;

