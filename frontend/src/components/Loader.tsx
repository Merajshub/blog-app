// import React from 'react'

interface LoaderProps {
    loading: boolean;
  }

const Loader = ({loading}:LoaderProps) => {
    return (
        <>
            {
                loading &&
                <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50">
                    <div className="border-4 border-gray-200 border-t-blue-500 rounded-full w-16 h-16 animate-spin"></div>
                </div>
            }
        </>
    )
}

export default Loader