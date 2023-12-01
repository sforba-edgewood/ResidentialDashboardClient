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
            router.push('/dashboard')
        }

    }

    return(
        <aside id="default-sidebar"  className="min-h-screen" aria-label="Sidebar">
            <ul className="w-full">
                <li className="w-full border-b-2">
                    <Link href="/dashboard/daily" className="block py-4 pl-4">
                        Daily Checklist
                    </Link>
                </li>
                <li className="w-full border-b-2">
                    <Link href="/dashboard/weekly" className="block py-4 pl-4">
                        Weekly Checklist
                    </Link>
                </li>
                <li className="w-full border-b-2">
                    <Link href="/dashboard/monthly" className="block py-4 pl-4">
                        Monthly Checklist
                    </Link>
                </li>
                <li className="w-full border-b-2">
                    <Link href="/dashboard/drafts" className="block py-4 pl-4">
                        Drafts
                    </Link>
                </li>
                <li className="w-full border-b-2">
                    <Link href="/dashboard/profile" className="block py-4 pl-4">
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