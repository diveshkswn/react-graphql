import { GetStaticProps } from 'next/types';

const aboutPage = (props : GetStaticProps) => {
  console.log(props);

  return (
    <h1>About Page</h1>
  );
};

export default aboutPage;

export const getServerSideProps = () => ({ props: { name: 'divesh' } });

// export const getStaticProps : GetStaticProps = ()=>{
//     return{
//     props : {name : "divesh"}
//     }
// }
