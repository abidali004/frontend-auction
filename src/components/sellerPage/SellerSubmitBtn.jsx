import React from 'react'
import { Button } from "@/components/ui/button";

const SellerSubmitBtn = ({ isSubmitting }) => {
    console.log("submit button clicked")
    return (
        <div className='w-full flex items-center justify-center'>
            <div className="w-2/3 pt-3 pb-10 flex items-center justify-end">
                <Button type='submit' disabled={isSubmitting} >

                    {isSubmitting ? 'Submitting...' : 'Submit'}
                </Button>
            </div>
        </div>
    );
}

export default SellerSubmitBtn;
