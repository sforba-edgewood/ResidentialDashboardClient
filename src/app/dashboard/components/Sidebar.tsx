import Link from "next/link";
const Sidebar = () => {
    const handleLogOut = (e) => {
        e.preventDefault();
        const response = fetch('/api/auth/logout').catch(e=> console.error(e));
        console.log(response);
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
                    <Link onClick={(e)=>{handleLogOut(e)}} href="#" className="block py-4 pl-4">
                        Logout
                    </Link>
                </li>
            </ul>
        </aside>
    );
}

export default Sidebar;