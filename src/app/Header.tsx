import Image from "next/image";

const Header = () => {
    return(
        <header className="border-b-2">
            <div className="mx-auto container py-10 flex justify-center">
                <Image className="max-h-20 w-auto" alt="Edgewood Properties" width={600} height={182} src={'/ep_logo.png'}/>
            </div>
        </header>
    );
}

export default Header;