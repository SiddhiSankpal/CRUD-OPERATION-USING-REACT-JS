CRUD OPERATION

Create: 

The create operation involves adding new data to the application. 
In ReactJS, we typically create a form component where users can input information. 
When the form is submitted, you capture the input values and use them to create a new data entry. 
This may involve sending an HTTP POST request to a backend API to store the data in a database or storage system.

Read: 

The read operation focuses on retrieving data from a source, such as a backend API or a database. 
In ReactJS, we can use  Fetch API to make HTTP GET requests to fetch data. 
Once the data is received, you can store it in the component's state or pass it down as props to child components for rendering and displaying the data in the user interface.

Update: 

The update operation allows modifying existing data.
In ReactJS, we typically present the data in an editable form or component. 
Users can make changes to the data, and upon submission, you capture the updated values and send an HTTP PUT or PATCH request to the backend API. 
This request updates the corresponding data entry in the database or storage system.

Delete: 

The delete operation involves removing data from the application. 
In ReactJS, we can provide a delete button or action associated with each data entry. 
When triggered, you send an HTTP DELETE request to the backend API, specifying the unique identifier of the data to be deleted. 
The backend API then removes the corresponding data entry from the database or storage system
