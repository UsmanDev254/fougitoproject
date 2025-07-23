import Featured from "../../Assests/Images/AboutImages/feature.webp";


function AboutFeatured(){
    return(
        <div className="container mt-0 mt-lg-5 p-4 p-lg-0 pt-0 pt-lg-5">
            <div className="about_featured_img rounded">
                <img src={Featured} alt="featured_img" className="w-100 rounded-4"></img>
            </div>
        </div>
    );
}

export default AboutFeatured;