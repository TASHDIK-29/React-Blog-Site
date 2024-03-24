import Banner from "../components/Banner";
import wave from "./../assets/wave.svg";

const Home = () => {
    return (
        <div className="relative min-h-[calc(100vh-116px)] flex flex-col justify-center items-center w-full">
            <Banner/>

            <img className="absolute bottom-0 w-full" src={wave} alt="" />
        </div>
    );
};

export default Home;