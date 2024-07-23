import { UserButton } from "@clerk/nextjs";

const Pro = () => {
    return ( 
        <div>
        <UserButton afterSignOutUrl="/"/>
        </div>
     );
}
 
export default Pro;