// All import statements at the top level (before any logic)
import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { assets } from '../assets/assets';

// Component logic below
const Appointment = () => {
  const { docId } = useParams();
  const { doctors, currencySymbol } = useContext(AppContext);
  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState('');
  const [loading, setLoading] = useState(true); // Loading state for slots

  const fetchDocInfo = async () => {
    const docInfo = doctors.find((doc) => doc._id === docId);
    setDocInfo(docInfo);
  };

  const getAvailableSlots = async () => {
    setDocSlots([]); // Clear previous slots
    let today = new Date();
    let allSlots = [];

    for (let i = 0; i < 7; i++) { // Iterate for the next 7 days
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      let endTime = new Date();
      endTime.setDate(today.getDate() + i);
      endTime.setHours(21, 0, 0, 0); // Set end time to 9:00 PM

      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10);
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10); // Future days start at 10:00 AM
        currentDate.setMinutes(0);
      }

      let timeSlots = [];
      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        timeSlots.push({
          datetime: new Date(currentDate),
          time: formattedTime,
        });

  
        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }

      setDocSlots(prev=>([...prev,timeSlots]))

    }}

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);

  // Call getAvailableSlots once docInfo is loaded
  useEffect(() => {
    if (docInfo) {
      getAvailableSlots();
    }
  }, [docInfo]);

  // If docInfo or slots are loading
useEffect(()=>{
  console.log(docSlots)
},[docSlots])
if (!docInfo || loading) {
  return <div>Loading...</div>;
}
  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-4">
        <div>
          {/* Add alt text to the image */}
          <img
            className="bg-primary w-full sm:max-w-72 rounded-lg"
            src={docInfo.image}
            alt={`${docInfo.name} - Doctor`}
          />
        </div>

        <div className="flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0">
          <p className="flex items-center gap-2 text-2xl font-medium">
            {docInfo.name}
            <img className="w-5" src={assets.verified_icon} alt="Verified icon" />
          </p>
          <div className="flex items-center gap-2 text-sm mt-1 text-gray-600">
            <p>{docInfo.degree} - {docInfo.speciality}</p>
            <button className="py-0.5 px-2 border text-xs rounded-full">{docInfo.experience} years of experience</button>
          </div>
          <div>
            <p className="flex item-center gap-1 text-sm font-medium text-gray-900 mt-3">
              About <img src={assets.info_icon} alt="" />
            </p>
            <p className="text-sm text-gray-500 max-w-[700px] mt-1">{docInfo.about}</p>
          </div>
          <p className="text-gray-500 font-medium mt-4">
            Appointment fee: <span className="text-gray-600">{currencySymbol}{docInfo.fees}</span>
          </p>

          <div>
            <p className="mt-4 font-medium text-lg">Available Slots:</p>
            <div className="mt-2">
              {docSlots.length === 0 ? (
                <p>No available slots</p>
              ) : (
                docSlots.map((slot, index) => (
                  <button
                    key={index}
                    className={`py-2 px-4 border rounded-lg mt-2 ${slotIndex === index ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                    onClick={() => {
                      setSlotIndex(index);
                      setSlotTime(slot.time);
                    }}
                  >
                    {slot.time}
                  </button>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Export statement should be at the bottom (outside any functions)
export default Appointment;
