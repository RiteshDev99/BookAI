import ApiPricig from "./apipricing";
import Authentication from "./Authentication";
import CodeExample from "./codeExample";
import Endpoints from "./endpoints";
import OverView from "./overview";
import Tutorial from "./tutorial";

const HeroSection = () => {
    return (
        <>
            <div className="h-[800vh] w-[100%] bg-[#07172A] flex flex-col items-center gap-[5vh] pt-[5vh] ">
                <OverView />
                <Authentication />
                <Endpoints />
                <Tutorial />
                <CodeExample />
                <ApiPricig/>

            </div>
        </>
    )
}

export default HeroSection;