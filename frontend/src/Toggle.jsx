import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Box, Text } from '@chakra-ui/react';
import { Navigate, json, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { actionisUserFalse, actionisUserTrue } from './Redux/UserReducer/actionType';

const ToggleButton = ({value}) => {
 const dispatch = useDispatch();
  const navigate = useNavigate()
  const userStore = useSelector((store) => store.UserReducer);
  const isUser = userStore.isUser;

  const handleToggle = () => {
    if (!userStore.isUser) {
      dispatch(actionisUserTrue());
      navigate('/arivu');
    } else {
      dispatch(actionisUserFalse());
      navigate('/admin/dashboard');
    }
    
  };
console.log(isUser);  

 useEffect(()=>{
  console.log('yes')
  localStorage.setItem('user' ,JSON.stringify(userStore))
 },[userStore.isUser])
 

  return (
    <Box position="fixed" top={`${value}px`} right={0} zIndex={999}>
      <motion.button
        onClick={handleToggle}
        initial={{ borderRadius: 20 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        style={{
          width: 80,
          height: 25,
          borderRadius: 20,
          backgroundColor: '#1976D2',
          outline: 'none',
          border: '3px solid',
          cursor: 'pointer',
          position: 'relative',
          overflow: 'hidden',
          padding: 0,
          textAlign: 'center',
        }}
      >
        <motion.div
          initial={{ x: isUser ? 40 : 0 }}
          animate={{ x: isUser ? 40 : 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          style={{
            width: 40,
            height: 26,
            borderRadius: '20px 0 0 20px',
            backgroundColor: '#388E3C',
            position: 'absolute',
            top: 2,
            left: 2,
            textAlign:'center'
          }}
        />
        <Text
          style={{
            position: 'absolute',
            top: 5,
            left: isUser ? 40 : 0,
            right: 0,
            transition: 'left 0.3s',
            color: 'white',
            fontWeight: 'bold',
            fontSize: 11,
            pointerEvents: 'none',
          }}
          fontWeight="600"
        >
          {isUser ? 'User' : 'Admin'}
        </Text>
      </motion.button>
    </Box>
  );
};

export default ToggleButton;
