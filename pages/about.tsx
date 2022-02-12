import { GetServerSideProps } from 'next/types';

const aboutPage = (props : GetServerSideProps) => (
  <div className="MainContainer">
    <h1>Hello</h1>
    <h2>{props.name}</h2>
  </div>
);

export default aboutPage;

export const getServerSideProps = () => ({ props: { name: 'divesh' } });

// export const getStaticProps : GetStaticProps = ()=>{
//     return{
//     props : {name : "divesh"}
//     }
// }
