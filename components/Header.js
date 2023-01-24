import HomeIcon from "../public/icons/HomeIcon";
import UserIcon from "../public/icons/UserIcon";
import ContactIcon from "../public/icons/ContactIcon";
import InfoIcon from "../public/icons/InfoIcon";
import Image from "next/image";
import HeaderIcons from "./HeaderIcons";

const Header = () => {
  return (
    <div className="w-full px-8 bg-zinc-700 text-zinc-100 flex flex-col gap-4 py-4 sm:flex-row sm:justify-between">
      <div className="flex justify-center gap-8">
        <HeaderIcons icon={<HomeIcon />} title="HOME" />
        <HeaderIcons icon={<UserIcon />} title="ACCOUNT" />
        <HeaderIcons icon={<ContactIcon />} title="CONTACT" />
        <HeaderIcons icon={<InfoIcon />} title="ABOUT" />
      </div>
      <Image className="self-center" src="/images/moviedb-logo.png" alt="logo moviedb" width={100} height={100} />
    </div>
  );
};

export default Header;
