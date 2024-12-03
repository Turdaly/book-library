'use client'
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cleanError, selectorErrorMessage } from "@/app/redux/slices/errorSlices";

const Error = () =>{
  const errorMessage = useSelector(selectorErrorMessage);
  const dispatch = useDispatch()
  useEffect(() => {
    if (errorMessage) {
      toast.info(errorMessage)
      dispatch(cleanError())

    }
  }, [errorMessage]);

  return <ToastContainer position="top-right" autoClose={2000} />;
};

export default Error