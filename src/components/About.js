function About({photo ="https://via.placeholder.com/215", abou}){

return (
        <aside>
            <img src={photo} alt='blog logo'/>
            <p>{abou}</p>
        </aside>
    )
}
export default About;