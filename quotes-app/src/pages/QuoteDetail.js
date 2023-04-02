import { Fragment } from "react";
import { Route, useParams } from "react-router-dom";
import Comments from "../components/comments/Comments";
import DUMMY_QUOTES from "./Quotes";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const QuoteDetail = () => {
  const params = useParams();
  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  if(!quote){
    return <p>No Quote found!!</p>
  }



  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <p>{params.quoteId}</p>
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
