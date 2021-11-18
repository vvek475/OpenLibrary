import BestBooksGrid from "../components/bestBooksGrid/bestBooksGrid";
import FeaturedBoxList from "../components/featuredBoxList/featuredBoxList";
import FeaturedDataList from "../components/featuredDataList/featuredDataList";
import FeaturedTestimonial from "../components/featuredTestimonial/featuredTestimonial";
import Hero from "../components/hero/hero";

function Home(){
    return (
        <div className="page_home">
            <Hero/>
            <FeaturedBoxList />
            <FeaturedTestimonial />
            <BestBooksGrid/>
            <FeaturedDataList />
    </div>
    )
}

export default Home