import Layout from '../components/layout';
import { getAllIds, getData } from '../lib/data';

//define a getStaticProps() functiuon to have next.js retreive data to use for the dynamic page
// - this name defined by next.js
export async function getStaticProps( { params } ) {
  const itemData = await getData(params.id);
  //now itemData may have snack property
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
          <h4 className="card-title">{itemData.name}</h4>
          <h5 className="card-subtitle mb-2 text-body-secondary">{itemData.region}</h5>
          <p className="card-text">{itemData.type}</p>
          <p className="card-text">{itemData.nickname}</p>
          <p className="card-text">{itemData.number}</p>
          <h6>Pokemon's Evolutions</h6>
          <ol>
            {itemData.evolution && itemData.evolution.map(
                ({id, evolution}) => (
                  <li key={id}>
                    {evolution}
                  </li>
                )
              )
            }
          </ol>
        </div>
      </article>
    </Layout>
  );
}