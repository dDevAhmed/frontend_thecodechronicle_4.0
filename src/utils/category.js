import { PiPulse, PiToolbox, PiDatabase, PiChartLine, PiRobot, PiShieldCheck, PiDeviceMobile, PiGlobe, PiUsers, PiCube } from "react-icons/pi";
import { HiOutlineComputerDesktop } from "react-icons/hi2";

export const getCategoryDetails = (categoryName) => {
    const categoryMap = {
        health: { name: 'Health', icon: PiPulse, color: '#2ecc71' },
        tool: { name: 'Tool', icon: PiToolbox, color: '#3498db' },
        frontend: { name: 'Frontend', icon: HiOutlineComputerDesktop, color: '#f39c12' },
        backend: { name: 'Backend', icon: PiDatabase, color: '#16a085' },
        performance: { name: 'Performance', icon: PiChartLine, color: '#8e44ad' },
        ai: { name: 'AI', icon: PiRobot, color: '#e67e22' },
        security: { name: 'Security', icon: PiShieldCheck, color: '#2c3e50' },
        web: { name: 'Web', icon: PiGlobe, color: '#d35400' },
        mobile: { name: 'Mobile', icon: PiDeviceMobile, color: '#9b59b6' },
        community: { name: 'Community', icon: PiUsers, color: '#7f8c8d' },
        web3: { name: 'Web3', icon: PiCube, color: '#34495e' },
    };

    return categoryMap[categoryName] || { name: 'Unknown', icon: null, color: '#ccc' };
};