This project is a prototype for creating a tourism application with React.

create-react-app was used to start creating the application quickly.  It is dependent on a cms install and will not work unless you have it running and set up within the proxy property of the package.json file.


# TODO
- Create an audio player that is similar to something viewed on spotify for each location.
- Create a way to show specific images within the audio player based on timeline in the audio file or a person's location.
- Modify some container components to be dumb components.
- Separate the reducer based on domain.
- fix directory structure for components to be feature based. This will involve update the reducers locations and a number of imports (this seems tedious but it will help clean things up before the app scales).