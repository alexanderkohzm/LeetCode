


/**
 * 
 * 
 * 
 * 

// I AM A BUYER
// THIS IS A PUBLIC ACCESS PAGE 


initial API Calls you must make include
- categories() -> this will return all the categories that we will use to populate the filters on the side
- serie() -> this will return all the series available (i assume this is TRUSTANA WIDE)
- products() -> this will return all the products 


-> if we select one category (For example table, what will happen to serie)
-> SERIE depends on Categories. For example, if we select table, we should filter the series that come back. We should only get the table series for example. 
-> PRoducts also depends on categories. SImilar to serie, we should filter what is returned when we change what we click on in categories 


-> And if we change the filter of one, the others need to update the state of the others 

-> consider one single case -> we might want to filter series 
-> How would we filter series 
-> (page, limit) -> return everything backl 
-> if click on table, then we pass in table into the filter, the filter state updates
-> and the list of serie changes 

-> Download button = download all product information into a file (e.g. excel)
-> PRoduct team -> what if the user wants to download all the products 

-> Tricky requirement -> User wants to select all product first 
-> The user wants to select ALL product. But they want "UNSELECT ONE OR TWO"


 products()
 - this will return all the products based on certain filters 


 categories() 
 - this will return all the categories for the seller/distributor 

 
 serie() 
 - I assume this is the list of all "range of items" that the seller/distributor has 


  
 * 
 * 
 */