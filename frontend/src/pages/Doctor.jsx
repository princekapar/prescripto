import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';



const Doctor = () => {

  const { specialty } = useParams()
  const [filterDoc, setFilterDoc] = useState([])
  const [showFilter,setShowFilter] = useState(false)

  const navigate = useNavigate()
  
  const {doctors} = useContext(AppContext)

  const applyFilter = () => {
    if (specialty) {
      setFilterDoc(doctors.filter(doc => doc.speciality === specialty));
    } else {
      setFilterDoc(doctors);
     }
   }

  useEffect(() => {
    applyFilter();
  },[doctors, specialty])
   
  
  
  
  return (
    <div>
      <p className='text-gray-600'>Browse through the doctors specialist.</p>
      <div className='flex flex-col  sm:flex-row items-start gap-5 mt-5'>
        <button className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${showFilter ? 'bg-primary-blue text-white' : ''}`} onClick={()=> setShowFilter(prev => !prev)}>Filters</button>
        <div className={`flex-col gap-4 text-sm text-gray-600 ${showFilter ? 'flex' : 'hidden'}`}>
          <p onClick={()=> specialty === 'General physician' ? navigate('/doctors') : navigate('/doctors/General physician')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer whitespace-nowrap ${specialty === "General physician" ? "bg-indigo-100 text-black" : ""}`}>General Physician</p>
          <p onClick={()=> specialty === 'Gynecologist' ? navigate('') : navigate('/doctors/Gynecologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${specialty === "Gynecologist" ? "bg-indigo-100 text-black" : ""}`}>Gynecologist</p>
          <p onClick={()=> specialty === 'Dermatologist' ? navigate('') : navigate('/doctors/Dermatologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${specialty === "Dermatologist" ? "bg-indigo-100 text-black" : ""}`}>Dermatologist</p>
          <p onClick={()=> specialty === 'Pediatricians' ? navigate('') : navigate('/doctors/Pediatricians')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${specialty === "Pediatricians" ? "bg-indigo-100 text-black" : ""}`}>Pediatricians</p>
          <p onClick={()=> specialty === 'Neurologist' ? navigate('') : navigate('/doctors/Neurologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${specialty === "Neurologist" ? "bg-indigo-100 text-black" : ""}`}>Neurologist</p>
          <p onClick={()=> specialty === 'Gastroentrologist' ? navigate('') : navigate('/doctors/Gastroentrologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${specialty === "Gastroentrologist" ? "bg-indigo-100 text-black" : ""}`}>Gastroentrologist</p>
        </div>

<div className='w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-5 gap-y-6'>
    {filterDoc.map((item, index) => (
        <div 
          onClick={() => navigate(`/appointment/${item._id}`)} 
          key={index} 
          className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500 bg-white'
        >
            <img className='bg-blue-50 w-full object-cover' src={item.image} alt={item.name} />
            <div className='p-4'>
                <div className={`flex items-center gap-2 text-sm text-center ${item.available ? 'text-green-500 ' :  'text-gray-500'}`}>
                              
                        <p className={`w-2 h-2 ${item.available ? ' bg-green-500' : 'bg-gray-500'} rounded-full`}></p><p>{ item.available ? 'Available' : 'Not Available' }</p>
                          </div>
                <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                <p className='text-gray-600 text-sm'>{item.speciality}</p>
            </div>
        </div>
    ))}
</div>


      </div>
    </div>
  )
}

export default Doctor
