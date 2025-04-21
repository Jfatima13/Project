import Navbar from './Navbar';
import Input from './Input';

function Home() {
  return (
    <div>
      <Navbar />
      <div style={styles.container}>
       <Input/>
        <h1>Welcome to the website 👋</h1>
        <p>This is the home page.</p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '25rem',
    textAlign: 'center',
  },
};

export default Home;