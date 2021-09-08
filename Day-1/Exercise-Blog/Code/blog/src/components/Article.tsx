//props
interface ArticleProps{
    article: ArticleModel;
}
// schema for Article
export interface ArticleModel{
    id: number;
    title: string;
    tag: string;
    author: string;
    date: string;
    imgUrl: string;
    content: string;
}

function Article(props: ArticleProps){
    const {article} = props
    const content = article.content.substring(0,1000);
    return (
        <article>
            <h2 className="title"> {article.title} </h2>
            <ul className="info-container">
                <li className="info-item">{article.tag}</li>
                <li className="info-item"> Added by
                    <span className="info-mark"> {article.author} </span>
                </li>
                <li className="info-item">{article.date}</li>
            </ul>
            <div className="btn-container">
                <button type="button" className="actions-btn"> Edit </button>
                <button type="button" className="actions-btn"> Delete </button>
            </div>
            <img src={article.imgUrl} alt="Bike" />
            <div className="content-container">
                <p>{content}</p>
            </div>
            <div className="readmore-container">
                <button type="button" className="button">Read More</button>
            </div>
        </article>
    ) 
}


export default Article;