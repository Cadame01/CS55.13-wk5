import Layout from '../components/layout';
import { getAllIds, getData } from '../lib/data';

//define a getStaticProps() functiuon to have next.js retreive data to use for the dynamic page
// - this name defined by next.js
export async function getStaticProps( { params } ) {
  const itemData = await getData(params.id);
  return {
    props: {
      itemData
    }
  };
}

//define a getStaticPaths() function to tell next.js all valid URLS: 1,2,3,4
// - this name is defined by next.js
export async function getStaticPaths() {
  const paths = getAllIds();
  return {
    paths,
    fallback: false
  };
}

//export our dynamically routed page componenet entry
export default function Entry( { itemData } ) {
  return (
    <Layout>
      <article className="card col-6">
        <div className="card-body">
          <h5 className="card-title">{itemData.name}</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">{itemData.region}</h6>
          <p className="card-text">{itemData.type}</p>
          <p className="card-text">{itemData.nickname}</p>
          <p className="card-text">{itemData.number}</p>
        </div>
      </article>
    </Layout>
  );
}