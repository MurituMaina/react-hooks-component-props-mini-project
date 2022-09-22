import blogData from "../data/blog"

import Article from "./Article"
function ArticleList(){
    let values= blogData.posts
   let post = values.map((value, index)=> {
        return( <Article key={index} title={value.title} date={value.date} preview = {value.preview}/>)
    })
    return(
        <main>
          {post}  
        </main>
    )
}
export default ArticleList;