

function Article({articleTitle , dateOfTheArticle = "January 1, 1970", previewOfTheArticle}){
    return(
        <article>
    <h3>{articleTitle}</h3>
    <small>{dateOfTheArticle}</small>
    <p>{previewOfTheArticle}</p>
        </article>
    )
}
export default Article;