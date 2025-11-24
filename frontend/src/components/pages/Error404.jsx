import { Link } from 'react-router-dom'
import { HiExclamation, HiArrowNarrowLeft } from 'react-icons/hi'
import Button from '../elements/Button'

function Error404() {
    return (
        <div className="flex flex-col items-center justify-center p-8 h-screen bg-gray-100 text-gray-800">
            <div className="flex flex-col justify-center items-center max-w-md mx-auto text-center p-8 bg-white rounded-lg shadow-lg">
                <div className="text-6xl text-red-500 mb-4">
                    <HiExclamation />
                </div>
                <h1 className="text-4xl font-bold mb-2">404 - Page Not Found</h1>
                <p className="text-lg mb-4">This page didn’t make the cut for public safety standards. Let’s get you to a secure page.</p>
                <Link to="/">
                    <Button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg cursor-pointer">
                        <HiArrowNarrowLeft className="inline-block mr-2" />
                        Go Back Home
                    </Button>
                </Link>
            </div>
        </div>
    );
}

export default Error404;