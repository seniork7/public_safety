import { Link } from 'react-router-dom'
import { HiExclamation, HiArrowNarrowLeft } from 'react-icons/hi'
import Button from '../elements/Button'

function Error404() {
    return (
        <div className="flex flex-col items-center justify-center p-8 h-screen bg-bg text-primary">
            <div className="flex flex-col justify-center items-center max-w-md mx-auto text-center p-8 bg-surface rounded-lg shadow-lg">
                <div className="text-6xl text-error mb-4">
                    <HiExclamation />
                </div>
                <h1 className="text-4xl font-bold mb-2 text-primary">404 - Page Not Found</h1>
                <p className="text-lg mb-4 text-secondary">This page didn't make the cut for public safety standards. Let's get you to a secure page.</p>
                <Link to="/">
                    <Button className="bg-error hover:bg-accent-secondary text-surface font-bold py-2 px-4 rounded-lg cursor-pointer">
                        <HiArrowNarrowLeft className="inline-block mr-2" />
                        Go Back Home
                    </Button>
                </Link>
            </div>
        </div>
    );
}

export default Error404;
