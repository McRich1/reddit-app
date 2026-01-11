import NavigationHeader from './components/navigationHeader';
import PostFeed from './components/Postfeed';
import RedditCard from './components/RedditCard';

function App() {

  return (
    <div className="App"> 
     <NavigationHeader />
     <PostFeed />
     <div>
        <h1>Img</h1>
        <img src="https://external-preview.redd.it/pRMGh7nFkVkwaJCpJeDj_y_XqQYawHnZA7T73yhm1xI.jpeg?width=140&amp;height=70&amp;auto=webp&amp;s=79dd10e27718d8ae44b07170011f812b7c5aba4a" alt="testImage" />
      </div> 
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
