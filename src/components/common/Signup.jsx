import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeLowVision } from "@fortawesome/free-solid-svg-icons";
import { userSignup, userLogin, forgetPass, resetPassword } from '../../api/authentication';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userlogin, userlogout, signupModalOppen, signupModalClose } from '../../data/redux/authSlice';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function Signup() {
    const [showPassword, setShowPassword] = useState(false);
    // const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [isSignup, setIsSignup] = useState(true);
    const [isForgetPass, setIsForgetPass] = useState(false);
    const [isLogin, setIsLogin] = useState(null);
    const dispatch = useDispatch();
    const login = useSelector((state) => state.authentication.login);

    const isDialogOpen = useSelector((state) => state.authentication.isDialogOpen);


    const { resetpass, token } = useParams();

    const SignupSchema = Yup.object().shape({
        userName: Yup.string()
            .when('isSignup', {
                is: true,
                then: Yup.string()
                    .min(2, 'Too Short!')
                    .max(50, 'Too Long!')
                    .required('Name is required'),
            }),
        email: Yup.string().email('Invalid email').required('Email is required'),
        password: Yup.string()
            .when('isForgetPass', {
                is: false,
                then: Yup.string()
                    .min(8, "password must be 8 charecter")
                    .required("password required")
            })

    });

    useEffect(() => {
        if (resetpass) {
            setIsSignup(false);
            setIsForgetPass(true);
            // setIsDialogOpen(true);
            dispatch(signupModalOppen())
        }
    }, [resetpass]);

    const logout = () => {
        dispatch(userlogout());
        setIsLogin(false);
    };
    console.log("signup modal")
    return (
        <>
            {!isLogin ? (
                <Button variant="outline" onClick={() => dispatch(signupModalOppen())}>
                    {isSignup ? "Signup" : "Login"}
                </Button>
            ) : (
                <Button variant="outline" onClick={logout}>
                    Logout
                </Button>
            )}
            <Dialog open={isDialogOpen} onOpenChange={(open) => {
                if (!open) {
                    dispatch(signupModalClose());
                } else {
                    dispatch(signupModalOppen());

                }
            }}>
                <DialogContent className="sm:max-w-[30rem]">
                    <DialogHeader>
                        <DialogTitle>
                            {isSignup
                                ? "User Signup"
                                : !isForgetPass
                                    ? "User Login"
                                    : resetpass
                                        ? "User Reset Password"
                                        : "User Forget Password"}
                        </DialogTitle>
                        <DialogDescription>
                            {isSignup
                                ? "Make changes to your profile here. Click submit when you're done."
                                : "Please enter your credentials to log in."}
                        </DialogDescription>
                    </DialogHeader>
                    <Formik
                        initialValues={isSignup
                            ? { userName: '', email: '', password: '' }
                            : !isForgetPass
                                ? { email: '', password: '' }
                                : resetpass
                                    ? { email: '', password: '' }
                                    : { email: '' }}
                        validationSchema={SignupSchema}
                        onSubmit={async (values, { setSubmitting, resetForm }) => {
                            console.log("values", values)

                            try {
                                if (isSignup) {
                                    await userSignup(values);
                                    toast.success("Signup successful!");
                                    setIsSignup(false)
                                } else if (!isSignup && !isForgetPass) {
                                    const userId = await userLogin(values);
                                    toast.success("Login successful!");
                                    dispatch(userlogin(userId));
                                    setIsLogin("Logout");
                                    // setIsDialogOpen(false);
                                    dispatch(signupModalClose())
                                } else if (isForgetPass && !resetpass) {
                                    console.log("values", values)

                                    await forgetPass(values);
                                    toast.success("Password reset link sent!");
                                } else if (resetpass) {
                                    console.log("values reset", values)
                                    await resetPassword(values, token);
                                    toast.success("Password reset successfully!");
                                }
                                resetForm();

                            } catch (error) {
                                toast.error(error.response?.data?.message || "An error occurred");
                            } finally {
                                setSubmitting(false);
                            }
                        }}
                    >
                        {({ isSubmitting }) => (
                            <Form>
                                <div className="grid gap-4 py-4">
                                    {isSignup && (
                                        <div className="grid grid-cols-4 items-center gap-4">
                                            <Label className="text-right">userName</Label>
                                            <Field
                                                name="userName"
                                                className="col-span-3 border border-zinc-500 py-2 rounded-lg pl-2"
                                            />
                                            <ErrorMessage name="userName" component="div" className="text-red-500 text-nowrap" />
                                        </div>
                                    )}
                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <Label htmlFor="email" className="text-right">Email</Label>
                                        <Field
                                            name="email"
                                            type="email"
                                            placeholder="you@example.com"
                                            className="col-span-3 border border-zinc-500 py-2 rounded-lg pl-2"
                                        />
                                        <ErrorMessage name="email" component="div" className="text-red-500 text-nowrap" />
                                    </div>
                                    {(!isForgetPass || isSignup || resetpass) && (
                                        <div className="relative group grid grid-cols-4 items-center gap-4">
                                            <Label className="text-right">Password</Label>
                                            <Field
                                                name="password"
                                                type={showPassword ? "text" : "password"}
                                                className="col-span-3 border border-zinc-500 py-2 rounded-lg pl-2"
                                            />
                                            <span
                                                className="absolute right-2 cursor-pointer"
                                                onClick={() => setShowPassword(!showPassword)}
                                            >
                                                <FontAwesomeIcon icon={showPassword ? faEye : faEyeLowVision} />
                                            </span>
                                        </div>

                                    )}
                                    <ErrorMessage name="password" component="div" className="text-red-500 text-nowrap" />
                                    {!isSignup && (
                                        <span
                                            onClick={() => setIsForgetPass(!isForgetPass)}
                                            className="ml-[75%] mt-[-20px] text-sm text-red-900 cursor-pointer"
                                        >
                                            {!isForgetPass ? "Forgot Pass?" : "Back to Login"}
                                        </span>
                                    )}
                                </div>
                                <DialogFooter>
                                    <Button type="button" onClick={() => setIsSignup(!isSignup)}>
                                        {isSignup
                                            ? "Already have an account? Login"
                                            : "Don't have an account? Signup"}
                                    </Button>
                                    <Button type="submit" disabled={isSubmitting}>
                                        {isSignup
                                            ? "Submit"
                                            : !isForgetPass
                                                ? "Login"
                                                : resetpass
                                                    ? "Reset"
                                                    : "Forget"}
                                    </Button>
                                </DialogFooter>
                            </Form>
                        )}
                    </Formik>
                </DialogContent>
            </Dialog >
            <ToastContainer />
        </>
    );
}

export default Signup;
