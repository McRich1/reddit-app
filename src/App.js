import NavigationHeader from './components/navigationHeader';
import RedditCard from './components/RedditCard';

function App() {

  return (
    <div className="App">
      <NavigationHeader />
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <RedditCard
          votes="35.8k"
          title="Getting paid on the Wall of Death in Rajkot, India"
          image="https://placehold.co/600x400?text=Wall+of+Death"
          author="mohiemen"
          timePosted="7 hours ago"
          comments="689"
        />
      </div>
    </div>

  );
}

export default App;
