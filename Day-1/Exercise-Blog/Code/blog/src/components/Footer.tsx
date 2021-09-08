import React ,{Dispatch, SetStateAction} from 'react'

interface FooterProps{
    numberOfArticles: number;
    start: number;
    articlesLength: number;
    setStart: Dispatch<SetStateAction<number>>;
}

export default function Footer(props: FooterProps){
    
    const {numberOfArticles,start,articlesLength,setStart} = props;
    
    return (
        <footer className="footer">
            {start > 0 &&
                <button
                    onClick={(e) => setStart(start - numberOfArticles)}
                    className="footer__link">previous</button>}
            {start + numberOfArticles < articlesLength && 
                <button
                    onClick={(e) => setStart(start + numberOfArticles)}
                    className="footer__link footer__link--next">next</button>}
    </footer>
    )
}