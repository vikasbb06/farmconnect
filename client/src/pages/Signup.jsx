import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import { User, Phone, Mail, Lock, MapPin, Sprout } from 'lucide-react';

const Signup = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        password: '',
        role: 'farmer',
        village: '',
        state: '',
        city: '',
        preferred_language: 'en'
    });

    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // ✅ Phone validation
        if (!/^[0-9]{10}$/.test(formData.phone)) {
            setError("Phone number must be exactly 10 digits");
            return;
        }

        // ✅ Email validation — only .com allowed
        const emailPattern = /^[^\s@]+@[^\s@]+\.com$/;
        if (!emailPattern.test(formData.email)) {
            setError("Only .com email addresses are accepted (e.g. name@example.com)");
            return;
        }

        setLoading(true);
        setError('');

        try {
            const res = await axios.post(
                'https://farmconnect-backend-m1p3.onrender.com/auth/register',
                formData
            );
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('user', JSON.stringify(res.data.user));
            navigate('/dashboard');
        } catch (err) {
            setError(err.response?.data?.msg || 'Signup failed');
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex bg-gray-50">

            {/* LEFT SIDE (UNCHANGED) */}
            <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-green-600 via-green-500 to-emerald-600 p-12 text-white">
                <div className="flex flex-col justify-center w-full">
                    <div className="flex items-center space-x-3 mb-8">
                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                            <Sprout size={28} />
                        </div>
                        <h1 className="text-3xl font-bold">FarmConnect</h1>
                    </div>

                    <h2 className="text-4xl font-bold mb-4">
                        Join India's Largest Farm Network
                    </h2>
                </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
                <div className="w-full max-w-md">

                    <div className="bg-white rounded-2xl shadow-xl p-8">

                        <h2 className="text-2xl font-bold mb-6 text-center">
                            Create Account
                        </h2>

                        {error && (
                            <div className="mb-4 p-3 bg-red-100 text-red-600 rounded">
                                {error}
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-4">

                            {/* NAME */}
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Full Name"
                                className="w-full p-3 border rounded"
                                required
                            />

                            {/* PHONE */}
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={(e) => {
                                    const value = e.target.value;
                                    if (/^[0-9]{0,10}$/.test(value)) {
                                        setFormData({ ...formData, phone: value });
                                    }
                                }}
                                placeholder="10-digit Phone Number"
                                className="w-full p-3 border rounded"
                                required
                            />

                            {/* INLINE ERROR */}
                            {formData.phone && formData.phone.length !== 10 && (
                                <p className="text-red-500 text-sm">
                                    Phone must be exactly 10 digits
                                </p>
                            )}

                            {/* EMAIL */}
                            <input
                                type="text"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email (must end with .com)"
                                className="w-full p-3 border rounded"
                                required
                            />
                            {formData.email && !/^[^\s@]+@[^\s@]+\.com$/.test(formData.email) && (
                                <p className="text-red-500 text-sm">
                                    Only .com emails are accepted (e.g. name@example.com)
                                </p>
                            )}

                            {/* PASSWORD */}
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Password"
                                className="w-full p-3 border rounded"
                                required
                            />

                            {/* ROLE */}
                            <select
                                name="role"
                                value={formData.role}
                                onChange={handleChange}
                                className="w-full p-3 border rounded"
                            >
                                <option value="farmer">Farmer</option>
                                <option value="consumer">Consumer</option>
                            </select>

                            {/* LOCATION */}
                            {formData.role === 'farmer' ? (
                                <>
                                    <input
                                        type="text"
                                        name="village"
                                        value={formData.village}
                                        onChange={handleChange}
                                        placeholder="Village"
                                        className="w-full p-3 border rounded"
                                        required
                                    />
                                    <input
                                        type="text"
                                        name="state"
                                        value={formData.state}
                                        onChange={handleChange}
                                        placeholder="State"
                                        className="w-full p-3 border rounded"
                                        required
                                    />
                                </>
                            ) : (
                                <input
                                    type="text"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleChange}
                                    placeholder="City"
                                    className="w-full p-3 border rounded"
                                />
                            )}

                            {/* LANGUAGE */}
                            <select
                                name="preferred_language"
                                value={formData.preferred_language}
                                onChange={handleChange}
                                className="w-full p-3 border rounded"
                            >
                                <option value="en">English</option>
                                <option value="hi">Hindi</option>
                                <option value="kn">Kannada</option>
                            </select>

                            {/* SUBMIT */}
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-green-600 text-white py-3 rounded"
                            >
                                {loading ? "Creating..." : "Sign Up"}
                            </button>
                        </form>

                        <p className="text-center mt-4">
                            Already have an account?{" "}
                            <Link to="/login" className="text-green-600">
                                Login
                            </Link>
                        </p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;