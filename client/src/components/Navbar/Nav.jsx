import { useState, useEffect, useRef } from 'react'
import {IoMdArrowDropdown} from 'react-icons/io'
import { Link } from 'react-router-dom'

const Navigation = () => {
    const [isOpen, setIsOpen] = useState({
        transaction: false,
        maintenance: false,
        utilities: false,
    });
    
    const toggleDropdown = (dropdownKey) => {
        setIsOpen((prev) => ({
            ...prev,
            [dropdownKey]: !prev[dropdownKey],
        }));
    };

    const dropdrownRef = {
        transaction: useRef(null),
        maintenance: useRef(null),
        utilities: useRef(null),
        other: useRef(null)
    }
    
    useEffect(() => {
        function handleDocumentClick(e) {
            for( const key in isOpen ) {
                if( isOpen[key] && !dropdrownRef[key].current.contains(e.target)){
                    setIsOpen((prev) => ({ ...prev, [key]: false}))
                }
            }
        }
        document.addEventListener('click', handleDocumentClick)
        return () => {
            document.removeEventListener('click', handleDocumentClick)
        }
    }, [isOpen])


    const transaction = [
        'Request Monitoring',
        'Request Status',
        'RCD Monitoring',
        'IRA and Other Deposits Monitoring',
        'Account Payable Monitoring',
        'Gen. Purpose Disbur. Monitoring',
        'Liquidation Monitoring',
        'Direct JED Monitoring',
        'Liquidation',
        'Direct Journal Entry',
    ]
    
    const maintenance = [
        'chart of accounts',
        'report & analysis',
        'raaos',
        'assets inventory',
        'beginning balance'
    ]
    
    const utilities = [
        'rcd configuration',
        'quick entry configuration',
        'schedule of accounts payable',
        'bank accounts',
        'print config and maintenance',
        'task manager',
        'tagging'
    ]
    return (
        <div className="flex justify-between items-center bg-gray-800 w-screen lg:p-5">
            <div className=''>
                <h1 className='text-white text-lg font-bold uppercase'>accounting</h1>
            </div>
            <div className=''>
                <ul className='flex justify-evenly items-center space-x-10'>
                    <li className="mb-2" ref={dropdrownRef.transaction}>
                        <Link
                            className="text-blue-500 hover:underline space-x-3 flex items-center justify-between"
                            onClick={() => toggleDropdown('transaction')}
                        >
                            <span className={`uppercase font-medium ${isOpen.transaction ? 'text-green-600' : 'text-green-300'}`}>transaction</span>
                            <IoMdArrowDropdown className={`transition-transform ${isOpen.transaction ? 'rotate-0 text-green-600' : 'rotate-180 text-green-300'}`}/>
                        
                        </Link>
                        {isOpen.transaction && (
                            <ul className="absolute bg-gray-800 transition-transform ease-linear delay-100 top-20 p-3 space-y-1 rounded-md">
                                {
                                    transaction.map((transactions, index) => (
                                        <li 
                                            key={index}
                                            className='text-white border-l-transparent hover:border-l-green-300 border-l-4 hover:bg-gray-500 pl-1 rounded-sm'    
                                        >{transactions}</li>
                                    ))
                                }
                            </ul>
                        )}
                    </li>
                    <li className="mb-2" ref={dropdrownRef.maintenance}>
                        <button
                            className="text-blue-500 hover:underline space-x-3 flex items-center justify-between"
                            onClick={() => toggleDropdown('maintenance')}
                        >
                            <span className={`uppercase font-medium ${isOpen.maintenance ? 'text-green-600' : 'text-green-300'}`}>maintenance</span>
                            <IoMdArrowDropdown className={`transition-transform ${isOpen.maintenance ? 'rotate-0 text-green-600' : 'rotate-180 text-green-300'}`}/>
                        
                        </button>
                        {isOpen.maintenance && (
                            <ul className="absolute bg-gray-800 transition-transform ease-linear delay-100 top-20 p-3 space-y-1 rounded-md">
                                {
                                    maintenance.map((transactions, index) => (
                                        <li 
                                            key={index}
                                            className='text-white border-l-transparent hover:border-l-green-300 border-l-4 hover:bg-gray-500 pl-1 rounded-sm'    
                                        >{transactions}</li>
                                    ))
                                }
                            </ul>
                        )}
                    </li>
                    <li className="mb-2" ref={dropdrownRef.utilities}>
                        <button
                            className="text-blue-500 hover:underline space-x-3 flex items-center justify-between"
                            onClick={() => toggleDropdown('utilities')}
                        >
                            <span className={`uppercase font-medium ${isOpen.utilities ? 'text-green-600' : 'text-green-300'}`}>utilities</span>
                            <IoMdArrowDropdown className={`transition-transform ${isOpen.utilities ? 'rotate-0 text-green-600' : 'rotate-180 text-green-300'}`}/>
                        
                        </button>
                        {isOpen.utilities && (
                            <ul className="absolute bg-gray-800 transition-transform ease-linear delay-100 top-20 p-3 space-y-1 rounded-md">
                                {
                                    utilities.map((transactions, index) => (
                                        <li 
                                            key={index}
                                            className='text-white border-l-transparent hover:border-l-green-300 border-l-4 hover:bg-gray-500 pl-1 rounded-sm'    
                                        >{transactions}</li>
                                    ))
                                }
                            </ul>
                        )}
                    </li>
                </ul>
            </div>
            <div>
                <span>userLog:</span>
            </div>
        </div>
    )
}

export default Navigation