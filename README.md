# Tour Application

This project is a proof of concept for interactive audio tours using React.

I am utilizing a Content Management system which will contain a few custom objects.

These custom objects are the following:

- *Tours:* Tours contain multiple locations that a user wants to visit. 
- *Locations:* This will be a location associated to a tour.  It will have a relationship to points of interests.
- *Points of interests:* This will contain a list of audio files and geolcation coordinates associated t oa tour.

## Tours
A tour will have a specific city and state associated to it.  This will allow us to create additional tours in other locations outside of the Richmond Area.

Tours will containt mutilple locations.  Locations will be a custom object added to our CMS.  Each tour will have the ability to have a location linked back to it.  This would allow locations to be used in multiple places if you have the same narator.

### Making an initial request for tours
Making a request for tours returns an array of tours with their dependent locations and points of interests.  This will allow us to cut down the number of xhr requests. If a user clicks on a tour we can use find to look at our current tours list.  We can use find to get the tour with the corresponding id that was clicked.

## Locations
A location will have a list of points of interest associated to it.  A use would enter  tour and see that it has multiple locations that should be completed in a specific order.  Entering a location would allow a user to find all of the points of interests related to that location. 

We can get the id of a location based on the tour objects data structure.  Each location will have an id associated to it. Since we are referencing the location from a tour we can pull the properties from an object. If the object we are looking for is not populated in our reducer we will make an xhr request to populate a tour in our reducer.

## Points of interests
A point of interest allow a user to play audio related to a location within our tour.  Points of interesest will be an array of audio files, images, and additional data.
