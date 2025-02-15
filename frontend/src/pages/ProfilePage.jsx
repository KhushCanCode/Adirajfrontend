import React, { useState, useEffect } from 'react';
import { User, Map, History, Heart } from 'lucide-react';
import earringImage from "../assets/bento-image2.jpg"

function ProfilePage() {

      useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

  const [activeTab, setActiveTab] = useState('profile');
  const sidebarItems = [
    { id: "profile", label: "Profile Details", icon: <User /> },
    { id: "address", label: "Address", icon: <Map /> },
    { id: "orders", label: "Order History", icon: <History /> },
    { id: "wishlist", label: "Wishlist", icon: <Heart /> },
  ];
const [userProfile, setUserProfile] = useState({
  username: 'johndoe123',
  name: 'John Doe',
  email: 'john@example.com',
  phone: '+1 234 567 8900',
  gender: 'Male',
  dob: '1990-01-01',
  bio: 'Passionate about technology and travel. Always learning new things!'
});

  const [address, setAddress] = useState({
    street: '123 Sector',
    city: 'Ramnagar',
    state: 'Haryana',
    zipCode: '124132'
  });
  const orderHistory = [
    { id: 1, item: '24K Gold Necklace', date: '2023-10-15', status: 'Delivered' },
    { id: 2, item: 'Gold Bracelet', date: '2023-09-28', status: 'Returned' },
    { id: 3, item: 'Diamond Ring', date: '2023-09-10', status: 'In Progress' }
  ];

  const wishlist = [
    { id: 1, item: 'Gold Chain', price: '$599' },
    { id: 2, item: 'Diamond Earrings', price: '$899' },
    { id: 3, item: 'Gold Watch', price: '$1299' }
  ];

  const handleProfileUpdate = (e) => {
    e.preventDefault();
    // Handle profile update logic here
    alert('Profile updated successfully!');
  };
  const handleImageUpload = (e) => {
   
  };
  const handleAddressUpdate = (e) => {
    e.preventDefault();
    // Handle address update logic here
    alert('Address updated successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 mt-36">
      <div className="max-w-6xl mx-auto px-4">
        
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar Navigation */}
          <div className="w-full md:w-64 bg-white rounded-lg shadow-md p-4 h-fit">
          <nav>
            {sidebarItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center space-x-2 w-full p-3 rounded-lg cursor-pointer ${
                  activeTab === item.id ? "bg-red-50 text-secondary" : "hover:bg-red-50"
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
        </div>
          {/* Main Content */}
          <div className="flex-1 bg-white rounded-lg shadow-md p-4 md:p-6">
          {activeTab === 'profile' && (
          <div className="max-w-4xl mx-auto p-2 md:p-6 ">
          <form onSubmit={handleProfileUpdate} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Profile Photo Section */}
            <div className="flex flex-col items-center col-span-1 md:col-span-2">
              <div className="relative w-32 h-32 rounded-full overflow-hidden border border-red-100">
                {userProfile.profilePic ? (
                  <img src={userProfile.profilePic} alt="Profile" className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-neutral-50 text-neutral-300">
                    No Image
                  </div>
                )}
              </div>
            
            </div>

            {/* Username */}
            <div>
              <label className="block text-sm font-medium text-neutral-500">Username</label>
              <input
                type="text"
                value={userProfile.username}
                onChange={(e) => setUserProfile({ ...userProfile, username: e.target.value })}
                className="mt-1 w-full bg-gray-100 p-2 text-neutral-700 outline-none rounded-sm"
              />
            </div>

            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-neutral-500">Full Name</label>
              <input
                type="text"
                value={userProfile.name}
                onChange={(e) => setUserProfile({ ...userProfile, name: e.target.value })}
                className="mt-1 w-full bg-gray-100 p-2 text-neutral-700 outline-none rounded-sm"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-neutral-500">Email</label>
              <input
                type="email"
                value={userProfile.email}
                onChange={(e) => setUserProfile({ ...userProfile, email: e.target.value })}
                className="mt-1 w-full bg-gray-100 p-2 text-neutral-700 outline-none rounded-sm"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-neutral-500">Phone</label>
              <input
                type="tel"
                value={userProfile.phone}
                onChange={(e) => setUserProfile({ ...userProfile, phone: e.target.value })}
                className="mt-1 w-full bg-gray-100 p-2 text-neutral-700 outline-none rounded-sm"
              />
            </div>

            {/* Gender */}
            <div>
              <label className="block text-sm font-medium text-neutral-500">Gender</label>
              <select
                value={userProfile.gender}
                onChange={(e) => setUserProfile({ ...userProfile, gender: e.target.value })}
                className="mt-1 w-full bg-gray-100 p-2 text-neutral-700 outline-none rounded-sm cursor-pointer"
              >
                <option value="Male" >Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Date of Birth */}
            <div>
              <label className="block text-sm font-medium text-neutral-700">Date of Birth</label>
              <input
                type="date"
                value={userProfile.dob}
                onChange={(e) => setUserProfile({ ...userProfile, dob: e.target.value })}
                className="mt-1 w-full bg-gray-100 p-2 text-neutral-700 outline-none rounded-sm"
              />
            </div>

            {/* Bio */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-neutral-700">Bio</label>
              <textarea
                value={userProfile.bio}
                onChange={(e) => setUserProfile({ ...userProfile, bio: e.target.value })}
                className="mt-1 w-full bg-gray-100 p-2 text-neutral-700 outline-none rounded-sm"
              />
            </div>

            {/* Update Button */}
            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full bg-secondary p-2 rounded-md text-light cursor-pointer "
              >
                Update Profile
              </button>
            </div>
          </form>
        </div>)}


            {activeTab === 'address' && (
              <div>
                <h2 className="text-xl font-semibold mb-6 text-secondary">Address Details</h2>
                <form onSubmit={handleAddressUpdate}>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-neutral-500">Street Address</label>
                      <input
                        type="text"
                        value={address.street}
                        onChange={(e) => setAddress({...address, street: e.target.value})}
                        className="mt-1 block w-full bg-gray-100 p-2 text-neutral-700 outline-none rounded-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-500">City</label>
                      <input
                        type="text"
                        value={address.city}
                        onChange={(e) => setAddress({...address, city: e.target.value})}
                        className="mt-1 block w-full bg-gray-100 p-2 text-neutral-700 outline-none rounded-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-500">State</label>
                      <input
                        type="text"
                        value={address.state}
                        onChange={(e) => setAddress({...address, state: e.target.value})}
                        className="mt-1 block w-full bg-gray-100 p-2 text-neutral-700 outline-none rounded-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-500">ZIP Code</label>
                      <input
                        type="text"
                        value={address.zipCode}
                        onChange={(e) => setAddress({...address, zipCode: e.target.value})}
                        className="mt-1 block w-full  bg-gray-100 p-2 text-neutral-700 outline-none rounded-sm"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-secondary p-2 rounded-md text-light cursor-pointer"
                    >
                      Update Address
                    </button>
                  </div>
                </form>
              </div>
            )}

            {activeTab === 'orders' && (
              <div>
                <h2 className="text-xl font-semibold mb-6 text-secondary">Order History</h2>
                <div className="space-y-4">
                  {orderHistory.map((order) => (
                    <div key={order.id} className=" p-4  border-b border-neutral-400 ">
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="font-semibold text-neutral-800">{order.item}</h3>
                          <p className="text-sm text-gray-600">{order.date}</p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-sm ${
                          order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                          order.status === 'Returned' ? 'bg-red-100 text-red-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {order.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'wishlist' && (
              <div>
                <h2 className="text-xl font-semibold mb-6 text-secondary">My Wishlist</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {wishlist.map((item) => (
                    <div key={item.id} className="pb-4 border-b bg-light border-neutral-400 ">
                      <div className="flex flex-col justify-between items-center gap-2">
                        <div className='w-full h-52'>
                          <img src={earringImage} alt="" className='w-full h-full object-cover' />
                        </div>
                        <div className='flex items-center justify-between w-full p-2'>
                          <h3 className="font-semibold text-neutral-800">{item.item}</h3>
                          <p className="text-sm text-secondary">{item.price}</p>
                        </div>
                        <button className=" bg-secondary p-1 rounded-full text-light cursor-pointer ">
                          <Heart size={20} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage