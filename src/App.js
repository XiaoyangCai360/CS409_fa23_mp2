import ArtworkDetails from './ArtworkDetails';
import GalleryPage from './GalleryPage';
import ListPage from './ListPage';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
	return (
		<Router>
			<div className="App">
				<Navbar />
				<div className="content">
					<Switch>
						<Route exact path={['/list', '/']}>
							<ListPage />
						</Route>
						<Route path='/gallery'>
							<GalleryPage />
						</Route>
						<Route path="/artworks/:id">
							<ArtworkDetails />
						</Route>
					</Switch>
				</div>
			</div>
		</Router>
	);
}

export default App;
