import DrinksList from "@/components/DrinksList";

const DrinksPage = async () => {

    const URL = 'http://www.thecocktaildb.com/api/json/v1/1/search.php?f=a';

    const response = await fetch(URL);
    const data = await response.json();

    // console.log(data);

  return (
    <div>
      <DrinksList drinks={data.drinks}/>
    
    </div>
  )
}

export default DrinksPage;

