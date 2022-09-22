function Article({title, date="January 1, 1970", preview, minutes}){
let mins = ((minutes) => minutes>5?"☕️":"🍱") 

    return(
    <article>   
        <h3>{title}</h3>
        <small>{date}</small>
        <small> . {mins}{minutes} min read</small>
        <p>{preview}</p>
    </article>)
     
}
export default Article;