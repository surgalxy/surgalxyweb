import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import PageTransition from '../components/PageTransition';
import emailjs from 'emailjs-com';

const floatingAnimation = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
`;

const ContactContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(45deg, #1a0b2e, #5b0e91);
  color: white;
  padding: 50px;
  position: relative;
  overflow: hidden;
`;

const GalaxyBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('/assets/images/galaxy_background.png');
  background-size: cover;
  background-position: center;
  opacity: 0.2;
`;

const Title = styled.h1`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 40px;
  position: relative;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
`;

const FormContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 30px;
  backdrop-filter: blur(10px);
  position: relative;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 5px;
  border: none;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  font-size: 1rem;
  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }
`;

const TextArea = styled.textarea`
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 5px;
  border: none;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  font-size: 1rem;
  min-height: 150px;
  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background: #ffd700;
  color: #1a0b2e;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background: #fff;
    box-shadow: 0 0 20px rgba(255, 215, 0, 0.7);
  }
`;

const FloatingAstronaut = styled.img`
  position: absolute;
  width: 100px;
  height: auto;
  animation: ${floatingAnimation} 6s ease-in-out infinite;
  right: -50px;
  bottom: -50px;
`;

const SocialMediaLinks = styled.div`
  text-align: center;
  margin-top: 30px;
`;

const SocialLink = styled.a`
  margin: 0 10px;
  color: white;
  text-decoration: none;
  font-size: 1.5rem;
  &:hover {
    color: #ffd700;
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('surgalxywebservice', 'template_sjur4zg', e.target, 'R0oUn5ViLJH7z6_B2')
      .then((result) => {
          console.log(result.text);
          alert('Message sent successfully!');
      }, (error) => {
          console.log(error.text);
          alert('An error occurred, please try again.');
      });
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <PageTransition>
      <ContactContainer>
        <GalaxyBackground />
        <Title>Contact Us</Title>
        <FormContainer>
          <Form onSubmit={handleSubmit}>
            <Input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <Input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <TextArea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <Button type="submit">Send Message</Button>
          </Form>
          <FloatingAstronaut src="/assets/images/astronaut.png" alt="Floating Astronaut" />
        </FormContainer>
        <SocialMediaLinks>
			<SocialLink href="https://tiktok.com/@surgalxy" target="_blank">TikTok</SocialLink>
			<SocialLink href="https://twitter.com/surgalxy" target="_blank">Twitter</SocialLink>
          <SocialLink href="https://instagram.com/surgalxy" target="_blank">Instagram</SocialLink>
        </SocialMediaLinks>
      </ContactContainer>
    </PageTransition>
  );
};

export default Contact;
