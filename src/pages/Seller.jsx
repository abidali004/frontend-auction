import { useEffect, useState } from 'react'
import Title from '../components/sellerPage/Title'
import ProductNav from '../components/common/ProductNav'
import ProdRequirement from '../components/sellerPage/ProdRequirement'
import ProductImage from '@/components/sellerPage/ProductImage'
import GetImages from '@/components/sellerPage/GetImages'
import SellerSubmitBtn from '@/components/sellerPage/SellerSubmitBtn'
import { sellerPostProduct } from '../api/sellerAuth.js'
import { Formik, FieldArray, Form } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Seller = () => {
    const [isImages, setIsImages] = useState([])

    const validationSchema = Yup.object().shape({
        title: Yup.string().required('Title is required'),
        category: Yup.string().required('category is required'),
        location: Yup.string().required('Location is required'),
        startTime: Yup.date().required('Start time is required'),
        endTime: Yup.date()
            .required('End time is required')
            .min(Yup.ref('startTime'), 'End time must be after start time')
            .min(new Date(), 'end time must be grater then current date'),
        startPrice: Yup.string().required('Start bid price is required'),
        description: Yup.string().required('Description is required'),
        condition: Yup.string().required('Condition is required'),
        photos: Yup.array().min(1, 'At least one image is required'),
    });

    const handleImages = (e, values, setFieldValue) => {
        const files = Array.from(e.target.files);
        const newImages = files.map(file => ({
            file,
            preview: URL.createObjectURL(file),
        }));
        setIsImages(prevImages => [...prevImages, ...newImages]);
        // setFieldValue('photos', [values.photos, ...newImages]);
        const currentPhotos = Array.isArray(values.photos) ? values.photos : [];
        setFieldValue('photos', [...currentPhotos, ...newImages]);
    }

    const deleteImage = (index, values, setFieldValue) => {
        const updatedImages = isImages.filter((_, i) => i !== index);
        setIsImages(updatedImages);
        setFieldValue('photos', updatedImages);
    }

    return (
        <>
            <Formik
                initialValues={{
                    title: '',
                    category: '',
                    condition: '',
                    location: '',
                    startTime: '',
                    endTime: '',
                    startPrice: '',
                    description: '',
                    photos: [],
                }}
                validationSchema={validationSchema}
                onSubmit={async (values, { setSubmitting, resetForm }) => {
                    console.log("final values", values)
                    const formData = new FormData();
                    formData.append('startTime', values.startTime);
                    formData.append('endTime', values.endTime);
                    formData.append('title', values.title);
                    formData.append('category', values.category);
                    formData.append('condition', values.condition);
                    formData.append('startPrice', values.startPrice);
                    formData.append('description', values.description);
                    formData.append('location', values.location);

                    values.photos.forEach(photo => {
                        formData.append('photo', photo.file);
                    });
                    try {
                        await sellerPostProduct(formData)
                        toast.success("data submitted successfully")
                    } catch (error) {
                        toast.error(error.message || "An error occurred")
                    }

                    setSubmitting(false)
                    resetForm()
                    setIsImages([])


                }}

            >
                {({ values, setFieldValue, errors, touched, isSubmitting }) => (

                    <Form>
                        <ProductNav />
                        <Title
                            values={values}
                            setFieldValue={setFieldValue}
                            errors={errors}
                            touched={touched}
                        />
                        <ProdRequirement
                            values={values}
                            setFieldValue={setFieldValue}
                            errors={errors}
                            touched={touched}
                        />
                        {
                            isImages.length === 0 ?
                                (<ProductImage
                                    errors={errors}
                                    touched={touched}
                                    handleImages={(e) => handleImages(e, values, setFieldValue)} />) :
                                (<GetImages
                                    handleImages={(e) => handleImages(e, values, setFieldValue)}
                                    isImages={isImages}
                                    deleteImage={(index) => deleteImage(index, values, setFieldValue)}
                                />)
                        }
                        <SellerSubmitBtn isSubmitting={isSubmitting} />


                    </Form>
                )}
            </Formik >
            <ToastContainer />
        </>
    );
}

export default Seller;
