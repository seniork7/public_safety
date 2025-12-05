import AdminBg from '../../assets/images/admin-bg.png'

function AdminLogin() {
    return (
        <section className="flex items-center justify-center min-h-screen bg-bg text-text-primary px-4"
            style={{ backgroundImage: `url(${AdminBg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
        >
            <div className="w-full max-w-md bg-cover bg-center bg-no-repeat backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-white/5 hover:border-b-5 hover:border-b-accent-secondary transition-all duration-700">
                <header className="mb-8 text-center space-y-2">
                    <h2 className="text-3xl text-accent-primary">Admin Login</h2>
                    <p className="text-sm">
                        Login with your admin credentials. if you are not an admin, please return to the <a href="/" className="text-accent-secondary hover:underline">home page</a>.
                    </p>    
                </header>

                <form className="flex flex-col gap-6 lg:gap-2">
                    <div className="">
                        <label htmlFor="username" className="font-medium text-text-primary text-sm">Username</label>
                        <input
                            id="username"
                            type="text"
                            required
                            placeholder="admin@example.com"
                            className="w-full p-2 rounded-lg bg-input-bg border border-input-border text-input-text placeholder-input-placeholder focus:ring-2 focus:ring-accent-primary focus:border-transparent transition-all duration-300"
                        />
                    </div>
                    <div className="">
                        <label htmlFor="password" className="font-medium text-text-primary text-sm">Password</label>
                        <input
                            id="password"
                            type="password"
                            required
                            placeholder="••••••••"
                            className="w-full p-2 rounded-lg bg-input-bg border border-input-border text-input-text placeholder-input-placeholder focus:ring-2 focus:ring-accent-primary focus:border-transparent transition-all duration-300"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full p-2 mt-5 rounded-lg font-semibold bg-accent-secondary hover:bg-accent-primary hover:text-text-primary text-bg cursor-pointer transition duration-700 hover:scale-98"
                    >
                        Login
                    </button>
                </form>
            </div>
        </section>
    );
}

export default AdminLogin