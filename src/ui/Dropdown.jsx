// import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
// import { ChevronDownIcon } from '@heroicons/react/20/solid'
// import { useContext, useEffect } from 'react';
// import AppContext from '../contexts/AppContext';

// export default function Dropdown() {

//     const timeFrameMapping = {
//         'ThisYear': 'This Year',
//         'LastYear': 'Last Year',
//         'LastSixMonths': 'Last Six Months',
//     }

//     const { selectedPatient, selectedTimeFrame, setSelectedTimeFrame, setBloodPressureRange } = useContext(AppContext)
//     const diagnosisHistory = selectedPatient?.diagnosis_history

//     const filterByTimeFrame = (timeFrame) => {
//         setSelectedTimeFrame(timeFrame);

//         const currentYear = new Date().getFullYear();

//         let filtered;
//         switch (timeFrame) {
//             case "ThisYear":
//                 filtered = diagnosisHistory.filter(
//                     (record) => record.year === currentYear
//                 );
//                 break;
//             case "LastYear":
//                 filtered = diagnosisHistory.filter(
//                     (record) => record.year === currentYear - 1
//                 );
//                 break;
//             case "LastSixMonths":
//                 filtered = diagnosisHistory.slice(0, 6);
//                 break;
//             default:
//                 filtered = [];
//         }

//         if (filtered.length === 0) {
//             alert("No data available for the selected timeFrame.");
//         }

//         setBloodPressureRange(filtered);
//     };

//     useEffect(() => {
//         if (diagnosisHistory) {
//             filterByTimeFrame('LastSixMonths');
//         }
//     }, [diagnosisHistory]);

//     return (
//         <Menu as="div" className="relative inline-block text-left">
//             <div>
//                 <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
//                     {timeFrameMapping[selectedTimeFrame]}
//                     <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-gray-400" />
//                 </MenuButton>
//             </div>

//             <MenuItems
//                 transition
//                 className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
//             >
//                 <div className="py-1">
//                     <div className="py-1">
//                         {Object.keys(timeFrameMapping).filter(
//                             (timeFrame) => timeFrame !== selectedTimeFrame
//                         ).map((timeFrame) => (
//                             <MenuItem key={timeFrame}>
//                                 <button
//                                     type="button"
//                                     className="block w-full px-4 py-2 text-left text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
//                                     onClick={() => filterByTimeFrame(timeFrame)}
//                                 >
//                                     {timeFrameMapping[timeFrame]}
//                                 </button>
//                             </MenuItem>
//                         ))}
//                     </div>
//                 </div>
//             </MenuItems>
//         </Menu>
//     )
// }
