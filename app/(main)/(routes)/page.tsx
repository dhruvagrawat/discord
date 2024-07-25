import { ModeToggle } from "@/components/mode-toggle";
import { UserButton } from "@clerk/nextjs";

const Home = () => {
    return ( 
        <div>
        <UserButton afterSignOutUrl="/"/>
        <ModeToggle/>
        test
        </div>
     );
}
 
export default Home;