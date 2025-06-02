import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FaTelegram, FaBrain, FaHeart, FaShieldAlt } from 'react-icons/fa';

const AppContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  color: white;
  font-family: 'Inter', sans-serif;
`;

const Header = styled.header`
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  background: linear-gradient(45deg, #00b4d8, #90e0ef);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Main = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
`;

const Hero = styled.section`
  text-align: center;
  margin-bottom: 6rem;
`;

const Title = styled(motion.h2)`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  background: linear-gradient(45deg, #00b4d8, #90e0ef);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Subtitle = styled(motion.p)`
  font-size: 1.5rem;
  color: #90e0ef;
  margin-bottom: 2rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const Features = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

const FeatureCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 1rem;
  backdrop-filter: blur(10px);
  text-align: center;
`;

const FeatureIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #00b4d8;
`;

const CTAButton = styled(motion.a)`
  display: inline-block;
  background: linear-gradient(45deg, #00b4d8, #90e0ef);
  color: white;
  padding: 1rem 2rem;
  border-radius: 2rem;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.2rem;
  margin-top: 2rem;
  box-shadow: 0 4px 15px rgba(0, 180, 216, 0.3);
`;

function App() {
  return (
    <AppContainer>
      <Header>
        <Logo>AuraMind</Logo>
      </Header>
      <Main>
        <Hero>
          <Title
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Ваш ИИ-помощник в мире эмоций
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Безопасное пространство для подростков, где можно исследовать свои чувства,
            справляться со стрессом и развивать самопонимание
          </Subtitle>
          <CTAButton
            href="https://t.me/auramind_bot"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaTelegram style={{ marginRight: '8px' }} />
            Начать общение
          </CTAButton>
        </Hero>

        <Features>
          <FeatureCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <FeatureIcon>
              <FaBrain />
            </FeatureIcon>
            <h3>Саморефлексия</h3>
            <p>Помогаем разобраться в своих мыслях и чувствах через диалог</p>
          </FeatureCard>

          <FeatureCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <FeatureIcon>
              <FaHeart />
            </FeatureIcon>
            <h3>Эмоциональная поддержка</h3>
            <p>Создаем безопасное пространство для выражения эмоций</p>
          </FeatureCard>

          <FeatureCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <FeatureIcon>
              <FaShieldAlt />
            </FeatureIcon>
            <h3>Конфиденциальность</h3>
            <p>Ваши разговоры остаются строго конфиденциальными</p>
          </FeatureCard>
        </Features>
      </Main>
    </AppContainer>
  );
}

export default App;
