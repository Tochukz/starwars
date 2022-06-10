import { Link, useNavigate, useParams } from 'react-router-dom';

export default function Pagination({ pageMeta }: {pageMeta: any}) {
    const navigate = useNavigate();

    const params = useParams();

    const pages = () => {
      const elements = [];
      for(let i = 1; i <= 10; i++) {
        elements.push(i);
      }
      return elements;
    }
    const gotoPage = (page: number) => {
      if (pageMeta.current == page) {
        return;
      }
      navigate(`page/${page}`);
    }

    const previousPage = () => {
      gotoPage(pageMeta.current - 1);
    }

    const nextPage = () => {
      gotoPage(pageMeta.current + 1);
    }

  return (
    <ul className="pagination">
      <li className="page-item">
        <button className="page-link" onClick={() => gotoPage(1)} disabled={pageMeta.current == 1}>
          <i className="fa fa-step-backward"></i>
        </button>
      </li>
      <li className="page-item">
        <button className="page-link" onClick={previousPage} disabled={pageMeta.current < 2}>
          <i className="fa fa-backward"></i>
        </button>
      </li>
      {
        pages().map((page: any) => 
          <li  className="page-item" key={page}>
            <Link to={`/pages/${page}`} 
                  className={`page-link ${params.page == page? 'active' : ''}`}>{ page }</Link>
          </li>
        )
      }
      <li className="page-item">
        <button className="page-link" onClick={nextPage} disabled={pageMeta.current > pageMeta.pages -1}>
          <i className="fa fa-forward"></i>
        </button>
      </li>
      <li className="page-item">
        <button className="page-link" onClick={() => gotoPage(pageMeta.pages)} disabled={pageMeta.current == pageMeta.pages}>
        <i className="fa fa-step-forward"></i>
        </button>
      </li>
    </ul>
  )
}