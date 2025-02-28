import React, { useState, useEffect } from 'react';
import { Button, TextField, Card, Typography, Switch, FormControlLabel, Grid } from '@mui/material';
import styled from 'styled-components';
import axios from 'axios';

// Styled Components
const Section = styled(Card)`
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;
`;

const ProfilePic = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 10px;
`;

const InputLabel = styled(Typography)`
  font-weight: 600;
  margin-bottom: 8px;
`;

const AccountSettings = () => {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '123-456-7890',
    profilePicture: 'https://via.placeholder.com/150',
    address: [], // Initialize as an empty array
    paymentMethods: [], // Initialize as an empty array
    wishlist: [], // Initialize as an empty array
  });

  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [notificationPreferences, setNotificationPreferences] = useState({
    emailNotifications: true,
    smsNotifications: false,
  });

  const [addressInput, setAddressInput] = useState('');
  const [paymentInput, setPaymentInput] = useState('');
  const [wishlistInput, setWishlistInput] = useState('');

  // Fetch user data from an API
  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      // Simulate an API call to fetch user data
      const response = await axios.get('/api/user');  // Replace with your actual API endpoint
      setUser(response.data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const handleProfileUpdate = async () => {
    try {
      // API call to update user profile
      const response = await axios.put('/api/update-profile', {
        name: user.name,
        email: user.email,
        phone: user.phone,
        profilePicture: user.profilePicture,
      });
      if (response.status === 200) {
        alert('Profile updated successfully!');
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('Failed to update profile.');
    }
  };

  const handlePasswordChange = async () => {
    if (newPassword !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    try {
      // API call to update the password
      const response = await axios.post('/api/change-password', { newPassword });
      if (response.status === 200) {
        alert('Password updated successfully!');
      }
    } catch (error) {
      console.error('Error changing password:', error);
      alert('Failed to change password.');
    }
  };

  const handleNotificationChange = (e) => {
    const { name, checked } = e.target;
    setNotificationPreferences({
      ...notificationPreferences,
      [name]: checked,
    });
  };

  const handleAddItem = async (type, inputValue) => {
    if (!inputValue) {
      alert(`Please enter a valid ${type}.`);
      return;
    }

    try {
      let updatedUser;
      if (type === 'address') {
        updatedUser = { ...user, address: [...user.address, inputValue] };
        setUser(updatedUser);
        setAddressInput('');
      } else if (type === 'payment') {
        updatedUser = { ...user, paymentMethods: [...user.paymentMethods, inputValue] };
        setUser(updatedUser);
        setPaymentInput('');
      } else if (type === 'wishlist') {
        updatedUser = { ...user, wishlist: [...user.wishlist, inputValue] };
        setUser(updatedUser);
        setWishlistInput('');
      }

      // API call to save new item (replace with actual API calls)
      const response = await axios.put(`/api/update-${type}`, updatedUser);
      if (response.status === 200) {
        alert(`${type.charAt(0).toUpperCase() + type.slice(1)} updated successfully!`);
      }
    } catch (error) {
      console.error(`Error updating ${type}:`, error);
      alert(`Failed to update ${type}.`);
    }
  };

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Account Settings
      </Typography>

      {/* Profile Section */}
      <Section>
        <Typography variant="h5" gutterBottom>Personal Information</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <InputLabel>Full Name</InputLabel>
            <TextField
              fullWidth
              variant="outlined"
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputLabel>Email</InputLabel>
            <TextField
              fullWidth
              variant="outlined"
              type="email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <InputLabel>Phone Number</InputLabel>
            <TextField
              fullWidth
              variant="outlined"
              value={user.phone}
              onChange={(e) => setUser({ ...user, phone: e.target.value })}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputLabel>Profile Picture</InputLabel>
            <input
              type="file"
              onChange={(e) => setUser({ ...user, profilePicture: URL.createObjectURL(e.target.files[0]) })}
            />
            <ProfilePic src={user.profilePicture} alt="Profile" />
          </Grid>
        </Grid>
        <Button variant="contained" color="primary" onClick={handleProfileUpdate}>Update Profile</Button>
      </Section>

      {/* Password Change Section */}
      <Section>
        <Typography variant="h5" gutterBottom>Change Password</Typography>
        <TextField
          fullWidth
          variant="outlined"
          label="New Password"
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <TextField
          fullWidth
          variant="outlined"
          label="Confirm New Password"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Button variant="contained" color="secondary" onClick={handlePasswordChange}>Change Password</Button>
      </Section>

      {/* Shipping and Billing Section */}
      <Section>
        <Typography variant="h5" gutterBottom>Shipping and Billing Information</Typography>

        {/* Addresses */}
        <Typography variant="h6">Addresses</Typography>
        {Array.isArray(user.address) && user.address.length > 0 ? (
          user.address.map((address, index) => (
            <Typography key={index}>{address}</Typography>
          ))
        ) : (
          <Typography>No addresses available</Typography>
        )}
        <TextField
          variant="outlined"
          label="Add New Address"
          fullWidth
          value={addressInput}
          onChange={(e) => setAddressInput(e.target.value)}
        />
        <Button variant="contained" onClick={() => handleAddItem('address', addressInput)}>Add Address</Button>

        {/* Payment Methods */}
        <Typography variant="h6">Payment Methods</Typography>
        {Array.isArray(user.paymentMethods) && user.paymentMethods.length > 0 ? (
          user.paymentMethods.map((method, index) => (
            <Typography key={index}>{method}</Typography>
          ))
        ) : (
          <Typography>No payment methods available</Typography>
        )}
        <TextField
          variant="outlined"
          label="Add New Payment Method"
          fullWidth
          value={paymentInput}
          onChange={(e) => setPaymentInput(e.target.value)}
        />
        <Button variant="contained" onClick={() => handleAddItem('payment', paymentInput)}>Add Payment Method</Button>
      </Section>

      {/* Wishlist Section */}
      <Section>
        <Typography variant="h5" gutterBottom>Wishlist</Typography>
        {Array.isArray(user.wishlist) && user.wishlist.length > 0 ? (
          user.wishlist.map((item, index) => (
            <Typography key={index}>{item}</Typography>
          ))
        ) : (
          <Typography>No items in wishlist</Typography>
        )}
        <TextField
          variant="outlined"
          label="Add to Wishlist"
          fullWidth
          value={wishlistInput}
          onChange={(e) => setWishlistInput(e.target.value)}
        />
        <Button variant="contained" onClick={() => handleAddItem('wishlist', wishlistInput)}>Add to Wishlist</Button>
      </Section>

      {/* Notification Preferences */}
      <Section>
        <Typography variant="h5" gutterBottom>Notification Preferences</Typography>
        <FormControlLabel
          control={
            <Switch
              checked={notificationPreferences.emailNotifications}
              onChange={handleNotificationChange}
              name="emailNotifications"
            />
          }
          label="Email Notifications"
        />
        <FormControlLabel
          control={
            <Switch
              checked={notificationPreferences.smsNotifications}
              onChange={handleNotificationChange}
              name="smsNotifications"
            />
          }
          label="SMS Notifications"
        />
      </Section>
    </div>
  );
};

export default AccountSettings;
