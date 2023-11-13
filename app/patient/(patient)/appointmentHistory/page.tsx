import Image from 'next/image';
import React from 'react';
// import { BsPersonFillAdd } from 'react-icons/bs'

const page = () => {
    const imgLink = 'https://lh3.googleusercontent.com/p0LabmFZOR8VwInUR7NHdWjSjPbWv05rIc9hZRs0wgS5uKFpxdcZ82Q1yf9QGLqufM8xWbtId654W9GxpyHQqr8W0KtOKGQI=w1600-rj'
    return (
        <div className=' px-4'>
            <div className='my-4 px-6 flex items-end justify-between py-6'>

                <h2 className='text-mix-4 text-3xl font-bold'>Doctor Appointments</h2>

            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th className='text-xl'>
                                #
                            </th>
                            <th>Name</th>

                            <th>Email</th>
                            <th>Mobile/cell</th>
                            <th>Appointment Date/Time</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <th className='text-xl text-gray-400'>
                                1
                            </th>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <Image width={240} height={240} src={imgLink} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">Yoona Kau Han</div>
                                        <div className="text-sm opacity-50">Cancer Specialist</div>
                                    </div>
                                </div>
                            </td>

                            <td>mynul.sakil@gmail.com</td>
                            <td className='text-red-400'>
                                123456678567
                            </td>
                            <td ><h3 className='text-md'>12/10/2023</h3>
                                <p className='text-clip text-mix'>12:10PM</p>
                            </td>
                            <th>
                                <button className="btn btn-success btn-xs ">Done</button>
                            </th>
                        </tr>
                        {/* row 1 */}
                        <tr>
                            <th className='text-xl text-gray-400'>
                                1
                            </th>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <Image width={240} height={240} src={imgLink} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">Yoona Kau Han</div>
                                        <div className="text-sm opacity-50">Cancer Specialist</div>
                                    </div>
                                </div>
                            </td>

                            <td>mynul.sakil@gmail.com</td>
                            <td className='text-red-400'>
                                123456678567
                            </td>
                            <td ><h3 className='text-md'>12/10/2023</h3>
                                <p className='text-clip text-mix'>12:10PM</p>
                            </td>
                            <th>
                                <button className="btn btn-error text-white btn-xs ">Cancel</button>
                            </th>
                        </tr>
                    </tbody>

                </table>
            </div>
            {/* paganition */}
            <div className='flex justify-center items-center mt-6'>
                <div className="join">
                    <button className="join-item btn">1</button>
                    <button className="join-item btn btn-mix">2</button>
                    <button className="join-item btn">3</button>
                    <button className="join-item btn">4</button>
                </div>
            </div>
        </div>
    );
};

export default page;