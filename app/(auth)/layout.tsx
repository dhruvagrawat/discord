

const AuthLayout = ({children}: {children: React.ReactNode}) => {
    return ( 
        <div className="bg-red-200 flex items-center justify-center">
            {children}
        </div>

     );
}
 
export default AuthLayout;