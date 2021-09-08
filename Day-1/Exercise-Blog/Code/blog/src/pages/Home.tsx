import React , {useState , useEffect} from 'react';
import Article, {ArticleModel as IArticle} from '../components/Article';
import Footer from '../components/Footer';
export default function Home() {
    const [error,setError] = useState(null);
    const [isLoaded,setIsLoaded] = useState(false);
    const [items, setItems] = useState<any[]>([]);
    const [articles,setArticles] = useState([] as IArticle[]);
    const [start, setStart] = useState(0);
    const numberOfArticles = 3;

    useEffect(() =>{
        fetch("http://localhost:4000/articles")
            .then(res => res.json())
            .then(
                (result : IArticle[]) =>{
                    setIsLoaded(true);
                    setArticles(result);
                },
                (error) =>{
                    setIsLoaded(true);
                    setError(error);
                }
            )
    },[])

    if(error) {
        return <div>Error</div>
    }else if (!isLoaded) {
        return <div>Loading...</div>;
    }else {
        return (
            <main>
                {articles
                    .filter((article,index) => (index >= start) && (index < start + numberOfArticles))
                    .map(arcticle =>(
                        <Article key = {arcticle.id} article={arcticle}/>
                    ))
                }
                <Footer
                    numberOfArticles = {numberOfArticles}
                    start = {start}
                    articlesLength = {articles.length}
                    setStart = {setStart}
                />
            </main>
          );
    }

}
