import React from 'react'
import Section from './Components/Section'
import Maker from './Components/Maker'
import Globe from '../../helpers/Vantajs/Types/Globe'
import { Link } from 'react-router-dom'

const Home = () => {
  const Makers = () => {
    return (
      <div className='makers'>
        <Maker
          image={
            'https://drive.google.com/u/0/uc?id=1ktTBWoJ_KihB7eNvGOpr3ZuMxXw3xZ5t&export=download'
          }
          name={'Jay Goswami'}
          description={
            '2nd year Electronics Engineering,  BVM Vallabh Vidyanagar'
          }
        />
        <Maker
          image={
            'https://drive.google.com/u/0/uc?id=1Oc7Uz8BK4rXOHWfSWVa3n2z_LgK167ew&export=download'
          }
          name={'Akshat Singhania'}
          description={'Full Stack Developer || Studying in Class 8'}
        />

        <Maker
          image={
            'https://drive.google.com/u/0/uc?id=19bEiuqht95JeVEZEei09vNlyCC9t4dgm&export=download'
          }
          name={'Divya Sri Darimisetti'}
          description={'Electrical engineering, NIT Rourkela'}
        />

        <Maker
          image={
            'https://drive.google.com/u/0/uc?id=1OuKlj89KC9L8a-G5UbEgaoWiyr_1vhbp&export=download'
          }
          name={'Keivalya Pandya'}
          description={
            '2nd Year, Mechanical Engineering, BVM Vallabh Vidyanagar'
          }
        />
      </div>
    )
  }
  return (
    <div className='home'>
      <div className='home__container'>
        <Globe
          children={
            <Section
              background
              title={'Our Vision'}
              description={`We can send a person to the moon, defeat COVID, attend a hackathon which is thousands of miles away but we can't seem to solve traffic? No worries! We can always try.`}
            />
          }
        />
        <Section
          title={'What are the problems solved ?'}
          description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            cupiditate nobis labore ipsam! Praesentium, maiores mollitia.
            Doloremque minus recusandae soluta incidunt eum distinctio in,
            delectus eos veritatis. Culpa, facere iusto.`}
        />
        <Section title={'About the makers'} children={<Makers />}></Section>

        <Link to='/app' className='home__cta link'>
          Launch App
        </Link>
      </div>
    </div>
  )
}

export default Home
