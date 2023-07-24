import React from 'react';
import Header from '../components/Header';
import HomeHero from '../components/HomeHero';
import Brands from '../components/Brands';
import Tasks from '../components/Tasks';
import Pros from '../components/Pros';
import Posts from '../components/Posts';
import TasksSecond from '../components/TasksSecond';
import CarouselSection from '../components/Carousel';
import Integrations from '../components/Integrations';
import GetStarted from '../components/GetStartedSection';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Header />
      <HomeHero />
      <Brands />
      <Tasks />
      <Pros />
      <Posts />
      <TasksSecond />
      <CarouselSection />
      <Integrations />
      <GetStarted />
      <Footer />
    </div>
  );
};

export default Home;
