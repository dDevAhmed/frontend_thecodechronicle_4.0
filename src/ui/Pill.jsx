import { PiPulse, PiToolbox, PiBrowser, PiDatabase, PiChartLine, PiBrain, PiRobot, PiShieldCheck, PiDeviceMobile, PiGlobe, PiUsers, PiCube } from "react-icons/pi";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { getCategoryDetails } from "../utils/category";

export default function Pill({ text, classNames }) {

    return (
        <span className={`inline-flex gap-2 items-center border p-1 rounded-full px-2 py-1 text-sm font-medium text-gray-600 capitalize group w-fit hover:bg-gray-100 ${classNames}`}
        >
            {/* //todo - make pill dynamic than tied to category only */}
            {(() => {
                const details = getCategoryDetails(text);
                if (!details) {
                    return <span>Category Not Found</span>;
                }
                const { name, icon: Icon, color } = details;
                return (
                    <>
                        {Icon && <Icon style={{ color }} className="group-hover:text-gray-600" />}
                        {name}
                    </>
                );
            })()}
        </span>
    );
}