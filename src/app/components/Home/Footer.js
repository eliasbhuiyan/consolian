const Footer = () => {
    return (
        <footer className="bg-gray-200 py-4">
            <div className="container flex justify-center items-center">
                <div className="text-lg text-gray-600">
                    &copy; {new Date().getFullYear()} Consolian. All rights reserved.
                </div>
            </div>
        </footer>
    )
}

export default Footer


