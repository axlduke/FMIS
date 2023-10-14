import { useState } from 'react'

const Navigation = () => {
    const [isOpen, setIsOpen] = useState({
        transaction: false,
        maintenance: false,
        utilities: false,
    });
    
    const toggleDropdown = (dropdownKey) => {
        setIsOpen((prevState) => ({
            ...prevState,
            [dropdownKey]: !prevState[dropdownKey],
        }));
    };
    return (
        <div className="bg-gray-200 w-1/5 min-h-screen p-4">
            <h2 className="text-2xl font-semibold mb-4 uppercase">accounting</h2>
            <nav>
                <ul>
                    <li className="mb-2">
                        <button
                            className="text-blue-500 hover:underline flex items-center justify-between"
                            onClick={() => toggleDropdown('transaction')}
                        >
                        <span className=' uppercase'>transaction</span>
                            <svg
                                className={`h-4 w-4 transition-transform ${
                                isOpen.transaction ? 'rotate-0' : 'rotate-180'
                                }`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                fillRule="evenodd"
                                d="M6.293 6.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                                clipRule="evenodd"
                                />
                            </svg>
                        </button>
                        {isOpen.transaction && (
                            <ul className="ml-4">
                                <li>
                                    <a
                                        href="/admin/settings"
                                        className="text-blue-500 hover:underline"
                                    >
                                        Request Monitoring
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/admin/users"
                                        className="text-blue-500 hover:underline"
                                    >
                                        Request Status
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/admin/users"
                                        className="text-blue-500 hover:underline"
                                    >
                                        RCD Monitoring
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/admin/users"
                                        className="text-blue-500 hover:underline"
                                    >
                                        IRA and Other Deposits Mon.
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/admin/users"
                                        className="text-blue-500 hover:underline"
                                    >
                                        Acc. Payable Monitoring
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/admin/users"
                                        className="text-blue-500 hover:underline"
                                    >
                                        Gen. Purpose Disbur. Mon.
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/admin/users"
                                        className="text-blue-500 hover:underline"
                                    >
                                        Liquidation Monitoring
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/admin/users"
                                        className="text-blue-500 hover:underline"
                                    >
                                        Direct JED Monitoring
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/admin/users"
                                        className="text-blue-500 hover:underline"
                                    >
                                        Liquidation
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/admin/users"
                                        className="text-blue-500 hover:underline"
                                    >
                                        Direct Journal Entry
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/admin/users"
                                        className="text-blue-500 hover:underline"
                                    >
                                        JEV Edit Posted #
                                    </a>
                                </li>
                                {/* Add more dropdown items here */}
                            </ul>
                        )}
                    </li>
                    <li className="mb-2">
                        <button
                            className="text-blue-500 hover:underline flex items-center justify-between"
                            onClick={() => toggleDropdown('admin')}
                        >
                        <span className=' uppercase'>maintenance and report</span>
                            <svg
                                className={`h-4 w-4 transition-transform ${
                                isOpen.admin ? 'rotate-0' : 'rotate-180'
                                }`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                fillRule="evenodd"
                                d="M6.293 6.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                                clipRule="evenodd"
                                />
                            </svg>
                        </button>
                        {isOpen.admin && (
                            <ul className="ml-4">
                                <li>
                                    <a
                                        href="/admin/settings"
                                        className="text-blue-500 hover:underline"
                                    >
                                        Chart of Accounts
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/admin/users"
                                        className="text-blue-500 hover:underline"
                                    >
                                        Report & Analysis
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/admin/users"
                                        className="text-blue-500 hover:underline"
                                    >
                                        RAAOs
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/admin/users"
                                        className="text-blue-500 hover:underline"
                                    >
                                        Assets Inventory
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/admin/users"
                                        className="text-blue-500 hover:underline"
                                    >
                                        Beginning Balance
                                    </a>
                                </li>
                                {/* Add more dropdown items here */}
                            </ul>
                        )}
                    </li>
                    <li className="mb-2">
                        <button
                            className="text-blue-500 hover:underline flex items-center justify-between"
                            onClick={() => toggleDropdown('utilities')}
                        >
                        <span className=' uppercase'>utilities</span>
                            <svg
                                className={`h-4 w-4 transition-transform ${
                                isOpen.utilities ? 'rotate-0' : 'rotate-180'
                                }`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                fillRule="evenodd"
                                d="M6.293 6.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                                clipRule="evenodd"
                                />
                            </svg>
                        </button>
                        {isOpen.utilities && (
                            <ul className="ml-4">
                                <li>
                                    <a
                                        href="/admin/settings"
                                        className="text-blue-500 hover:underline"
                                    >
                                        RCD Configuration
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/admin/users"
                                        className="text-blue-500 hover:underline"
                                    >
                                        Quick Entry Config.
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/admin/users"
                                        className="text-blue-500 hover:underline"
                                    >
                                        Schedule of Acc. Payable
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/admin/users"
                                        className="text-blue-500 hover:underline"
                                    >
                                        Bank Accounts
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/admin/users"
                                        className="text-blue-500 hover:underline"
                                    >
                                        Print Config and Maintenance
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/admin/users"
                                        className="text-blue-500 hover:underline"
                                    >
                                        Task Manager
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/admin/users"
                                        className="text-blue-500 hover:underline"
                                    >
                                        Tagging
                                    </a>
                                </li>
                                {/* Add more dropdown items here */}
                            </ul>
                        )}
                    </li>
                {/* Repeat similar code for other sidebar items */}
                </ul>
            </nav>
        </div>
    )
}

export default Navigation