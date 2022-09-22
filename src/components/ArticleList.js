import blogData from "../data/blog"
import Article from "./Article"


function ArticleList(){
  console.log(blogData)
    let values= blogData.posts
    let posts = values.map((value, index)=> {
      console.log(value.title)
       return(<Article key={index} title={value.title} date={value.date} preview = {value.preview} minutes= {value.minutes}/>)})
       console.log(posts)
    return(
        <main>
        {posts} 
          
        </main>
    )
}
export default ArticleList;