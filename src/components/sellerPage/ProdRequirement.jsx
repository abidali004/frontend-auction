import React, { useState } from 'react'
import ConditionProd from './ConditionProd'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useSelector, useDispatch } from 'react-redux';
import { bidStartTime, bidEndTime, startBidPrice, bidDescription, sellerLocation } from '@/data/redux/sellerAuthSlice';
import { Field, ErrorMessage } from 'formik';
import DatePickerField from './DatePickerField';
import { Conditions } from '@/data/staticData/conditions';
const ProdRequirement = ({ values, setFieldValue, errors, touched }) => {

    const dispatch = useDispatch();
    const startTime = useSelector((state) => state.seller.startTime)
    const endTime = useSelector((state) => state.seller.endTime)

    return (
        <div className='w-full  flex-col items-center justify-center'>
            <div className='w-full flex items-center justify-center'>
                <div className="w-2/3 pt-20 pb-10 border-b border-zinc-600">
                    <div className=" text-[1.9rem]  text-nowrap md:text-[3rem] font-bold">
                        <h1 >product spesified</h1>
                    </div>
                    <div className="pt-5">
                        <h1 className='text-[1.5rem] font-bold'>Required</h1>
                        <h1 className='text-[18px] font-semibold text-zinc-600 pt-2'>Buyers need these details to find your item</h1>
                    </div>
                    <div className="flex flex-col md:flex-row gap-2 w-full py-5 ">
                        <div className=" flex flex-col w-full md:w-1/2">
                            <label className='font-semibold' >Condition</label>
                            <ConditionProd
                                value={values.condition}
                                setFieldValue={setFieldValue}
                                Conditions={Conditions}
                                fieldName='condition'
                            />
                            {touched.condition && errors.condition && <div className="text-red-500">{errors.condition}</div>}
                        </div>

                        <div className="flex flex-col   w-full md:w-1/2">
                            <label className='font-semibold' >Location</label>
                            <Field
                                type="text" name="location" className='border border-zinc-900 rounded w-full h-[3.4rem] shdaow-lg px-5' />
                            <ErrorMessage name="location" component="div" className="text-red-500" />

                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-2 w-full py-5">
                        <div className=" flex flex-col gap-1  w-full md:w-1/2">
                            <div className="w-full flex flex-col md:flex-row gap-1 ">
                                <div className=" w-full md:w-1/2 flex flex-col">
                                    <label className="font-semibold text-nowrap">Start Time</label>
                                    <DatePickerField
                                        name="startTime"
                                        showTimeSelect
                                        timeIntervals={15}
                                        timeFormat="HH:mm"
                                        dateFormat="MM/dd/yyyy h:mm aa"
                                        placeholderText="Select Start Date & Time"
                                        setFieldValue={setFieldValue}
                                    />
                                </div>
                                <div className="w-full md:w-1/2  flex flex-col">
                                    <label className="font-semibold text-nowrap">End Time</label>
                                    <DatePickerField
                                        name="endTime"
                                        showTimeSelect
                                        timeIntervals={15}
                                        timeFormat="HH:mm"
                                        dateFormat="MM/dd/yyyy h:mm aa"
                                        placeholderText="Select End Date & Time"
                                        setFieldValue={setFieldValue}
                                    />
                                </div>
                            </div>
                            <div className="w-full">
                                <small>Enter start <strong>Bid</strong> time and end <strong>Bid</strong> time</small>
                            </div>

                        </div>
                        <div className="flex flex-col  w-full md:w-1/2">
                            <label className='font-semibold' >Start Bid Price</label>
                            <Field
                                type="text" name="startPrice" className='border border-zinc-900 rounded w-full h-[3.4rem] shdaow-lg  px-5' />
                            <ErrorMessage name="startPrice" component="div" className="text-red-500" />
                        </div>
                    </div>
                    <div className="flex flex-col w-[100%]">
                        <label className="font-semibold">Description</label>
                        <Field
                            name="description"
                            as="textarea"
                            className="border border-zinc-900 rounded w-full h-[6rem] p-2"
                            placeholder="Type your description here..."
                        />
                        <ErrorMessage name="description" component="div" className="text-red-500" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProdRequirement

