import { useState, useEffect} from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const RequestMonitoringModal = () => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [dateSelected, setDateSelected] = useState(null)

    const handleStartDateChange = (date) => {
        setStartDate(date);
        checkDateSelect(date, endDate)
    };

    const handleEndDateChange = (date) => {
        setEndDate(date);
        checkDateSelect(startDate, date)
    };

    const checkDateSelect = (start, end) => {
        if (start && end) {
            setDateSelected(true);
        } else {
            setDateSelected(false);
        }
    }
    useEffect(() => {
        // Do something with the selected date range (startDate and endDate)
        if (startDate && endDate) {
        console.log('Selected Date Range: ', startDate, endDate);
        }
    }, [startDate, endDate])
    

    return (
        <div className='absolute top-32 w-auto rounded-md bg-black/80'>
            {!dateSelected ? (
                <div className='p-5 space-y-2'>
                    <div>
                        <span className='text-white font-semibold'>Filter Date</span>
                    </div>
                    <div className='flex justify-between px-10'>
                        <span className='text-white'>From</span>
                        <span className='text-white'>To</span>
                    </div>
                    <div className='flex justify-between space-x-3'>
                        <DatePicker
                            selected={startDate}
                            onChange={handleStartDateChange}
                            selectsStart
                            startDate={startDate}
                            endDate={endDate}
                        />
                        <DatePicker
                            selected={endDate}
                            onChange={handleEndDateChange}
                            selectsEnd
                            startDate={startDate}
                            endDate={endDate}
                            minDate={startDate}
                        />

                    </div>
                </div>
            ): null}
            {dateSelected ? (
                <div className='text-white'>
                    Hellow
                </div>
            ): null}
        </div>
    )
}

export default RequestMonitoringModal