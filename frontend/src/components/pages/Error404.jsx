import { Link } from 'react-router-dom'
import { HiExclamation, HiArrowNarrowLeft } from 'react-icons/hi'
import Button from '../elements/Button'

function Error404() {
    return (
        <div className="flex flex-col items-center justify-center p-8 h-screen bg-bg text-primary">
            <div className="flex flex-col justify-center items-center max-w-md mx-auto text-center p-8 bg-surface rounded-lg shadow-lg text-text-secondary">
                <div className="text-6xl text-accent-primary mb-4">
                    <HiExclamation />
                </div>
                <h1 className="text-4xl font-bold mb-2">404 - Page Not Found</h1>
                <p className="text-lg mb-4">This page didn't make the cut for public safety standards. Let's get you to a secure page.</p>
                <Link to="/">
                    <Button className="rounded-lg font-semibold bg-accent-primary hover:bg-accent-secondary hover:text-bg text-text-primary cursor-pointer transition duration-700 hover:scale-98">
                        <HiArrowNarrowLeft className="inline-block mr-2" />
                        Go Back Home
                    </Button>
                </Link>
            </div>
        </div>
    );
}

export default Error404;
