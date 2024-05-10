import Link from 'next/link';
import Image from 'next/image';


const SingleDrinkPage = async ({params}) => {

    const URL = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';
    const result = await fetch(`${URL}${params.id}`);
    const data = await result.json();

    const title = data?.drinks[0]?.strDrink;
    const imgSrc = data?.drinks[0]?.strDrinkThumb;


  return (
    <div>
        <Link href='/drinks' className='btn btn-primary mt-8 mb-12'>
            back to drinks
        </Link>
        <Image 
            className='w-48 h-48 rounded-lg shadow-lg'
            src={imgSrc} 
            width={300} 
            height={300}
            priority
            alt={title}
        />
        <h1 className='text-4xl mb-8'>
            {title}
        </h1>
    </div>
  )
}

export default SingleDrinkPage