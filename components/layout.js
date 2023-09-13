import Head from 'next/head';
import Link from 'next/link';

export default function Layout( { children, home } ) {
 return (
   <div>
     <Head>
       <title>Basic next.js App - Pokemon Theme</title>
     </Head>
     <header>
       <nav>
        <a href="https://www.pokemon.com/us">Pokemon Pokedex</a> 
       </nav>
     </header>
     <main>
       {children}
     </main>
     {!home && (
          <Link href="/" className="btn btn-primary mt-3">
            ← Back to pokedex
          </Link>
     )
     }
     <footer>
       <p>Gotta catch them all!</p>
     </footer>
   </div>
 ); 
}