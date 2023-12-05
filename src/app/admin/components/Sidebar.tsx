import Link from "next/link";
import { useRouter } from "next/navigation";

const Sidebar = () => {
    const router = useRouter();

    const handleLogOut = async (e: React.MouseEvent): Promise<any> => {
        e.preventDefault();
        const logoutResponse = await fetch('/api/auth/logout').then((response)=>{
            if(response?.status === 200) {
                return true;
            }   

           
        }).catch(e=> console.error(e));
        
        if(logoutResponse) {
            router.push('/admin')
        }

    }

    return(
        <aside id="default-sidebar"  className="min-h-screen" aria-label="Sidebar">
            <ul className="w-full">
                <li className="w-full border-b-2">
                    <Link href="/admin/daily" className="block py-4 pl-4">
                        Daily Review
                    </Link>
                </li>
                <li className="w-full border-b-2">
                    <Link href="/admin/weekly" className="block py-4 pl-4">
                        Weekly Review
                    </Link>
                </li>
                <li className="w-full border-b-2">
                    <Link href="/admin/monthly" className="block py-4 pl-4">
                        Monthly Review
                    </Link>
                </li>
                <li className="w-full border-b-2">
                    <Link href="/admin/users" className="block py-4 pl-4">
                        Users
                    </Link>
                </li>
                <li className="w-full border-b-2">
                    <Link href="/admin/properties" className="block py-4 pl-4">
                        Properties
                    </Link>
                </li>
                <li className="w-full border-b-2">
                    <Link href="/admin/profile" className="block py-4 pl-4">
                        Profile
                    </Link>
                </li>
                <li className="w-full border-b-2">
                    <button onClick={(e)=>{handleLogOut(e)}} className="block py-4 pl-4">
                        Logout
                    </button>
                </li>
            </ul>
        </aside>
    );
}

export default Sidebar;