import Recipe from "../recipe/Recipe";
// list : {Recipe}
import './Recipes.css'


function Recipes(props) {
    const isDoneList = props.list.filter(el=>el.isDone)
    const isNotDoneList = props.list.filter(el=>!el.isDone)

    return (
        <div>
            <h2 style={{color:'#00BFFF'}}>To Prepare</h2>
            <div className="Recipes">
            {isNotDoneList.map(el=>{
                return (
                    <Recipe image={el.image} title={el.title} description={el.description} isDone={el.isDone} id={el.id} key={el.id} buttonClickCb={props.toggleIsDone}></Recipe>
                )
            })}
            </div>
            <h2 style={{color:'#00BFFF'}}>To Eat</h2>
            <div className="Recipes">
            {isDoneList.map(el=>{
                return (
                    <Recipe image={el.image} title={el.title} description={el.description} isDone={el.isDone} id={el.id} key={el.id} buttonClickCb={props.toggleIsDone}></Recipe>
                )
            })}
            </div>
        </div>
    );
}
//            

export default Recipes;
