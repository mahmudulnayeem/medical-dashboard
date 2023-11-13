import Image from 'next/image';
import React from 'react';
import { BsPersonFillAdd } from 'react-icons/bs';
const page = () => {
    const imgLink = 'https://th.bing.com/th/id/OIP.eDTBbPyLQ0hoo72jyA6lNgHaHa?pid=ImgDet&rs=1'
    return (
        <div className=' px-4'>
            <div className='my-4 px-6 flex items-end justify-between py-6'>

                <h2 className='text-mix-4 text-3xl font-bold'>Test Reports</h2>
             
            </div>
            <div className='grid lg:grid-cols-2 gap-5'>

                <div className="card lg:card-side bg-base-100 shadow-xl border-2 border-gray-200 ">
                    <figure><Image className='rounded-s-md' src={imgLink} width={500} height={400} alt="Album" /></figure>
                    <div className="card-body flex flex-col justify-between">
                        <div>

                            <h2 className="card-title"><span className='font-bold'>Name</span> : Yoona Kem <small className='badge badge-sm badge-warning text-white'>pending</small></h2>
                            <p><span className='font-bold'>Details</span> : Patient Have Phycological Trama Lorem ipsum dolor sit amet,</p>

                            <small className='text-red-400'><span className='font-medium '>Report Type</span> : X-RAY </small>
                            <br />
                            <small className='text-red-400'><span className='font-medium '>Report Result</span> :None</small>
                        </div>
                   
                    </div>
                </div>
                <div className="card lg:card-side bg-base-100 shadow-xl border-2 border-gray-200 ">
                    <figure><Image className='rounded-s-md' src={imgLink} width={500} height={400} alt="Album" /></figure>
                    <div className="card-body flex flex-col justify-between">
                        <div>

                            <h2 className="card-title"><span className='font-bold'>Name</span> : Yoona Kem  <small className='badge badge-sm badge-success text-white'>Success</small></h2>
                            <p><span className='font-bold'>Details</span> : Patient Have Phycological Trama Lorem ipsum dolor sit amet,</p>

                            <small className='text-red-400'><span className='font-medium '>Report Type</span> : X-RAY </small>
                            <br />
                            <small className='text-red-400'><span className='font-medium '>Report Result</span> :Skull Bone Fracture</small>
                        </div>
                 
                    </div>
                </div>

            </div>
        </div>
    );
};

export default page;