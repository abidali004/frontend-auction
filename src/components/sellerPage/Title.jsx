import React from 'react'
// import { useDispatch } from 'react-redux'
// import { bidTitle } from '../../data/redux/sellerAuthSlice'
import { Field, ErrorMessage } from 'formik';
import { categories } from '@/data/Category';
import ConditionProd from './ConditionProd';


const Title = ({ values, setFieldValue, errors, touched }) => (

    <div className='w-full border-t   flex items-center justify-center'>
        <div className="w-2/3 pt-20 border-b border-zinc-400 flex flex-col gap-5 justify-center pb-10">
            <div className="">
                <div className="text-[3rem] font-bold">
                    <h1>Title</h1>
                </div>
                <div className="text-[18px] font-semibold text-zinc-600 pt-2">
                    <h1>Use words people would search for when looking for your item.</h1>
                </div>
            </div>
            <div className="flex gap-2">
                <div className=" w-1/2 h-[3.4rem]">
                    <Field
                        type="text" name="title" placeholder='enter in title' className='border border-gray-300 rounded w-full h-full shdaow-lg focus:border-gray-500 px-5' />
                    <ErrorMessage name="title" component="div" className="text-red-500" />
                </div>
                <div className="w-1/2">
                    {/* <Field
                        type="text" name="category" placeholder='search in cetagory' className='border border-gray-300 rounded w-full h-full shdaow-lg focus:border-gray-500 px-5' />
                    <ErrorMessage name="title" component="div" className="text-red-500" /> */}
                    <ConditionProd
                        value={values.category}
                        setFieldValue={setFieldValue}
                        Conditions={categories}
                        fieldName='category'
                    />
                    {touched.category && errors.category && <div className="text-red-500">{errors.category}</div>}
                </div>
            </div>
        </div>
    </div>
)


export default Title
