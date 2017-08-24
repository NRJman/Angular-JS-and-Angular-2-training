### General Idea
The idea here is for the user to search the descriptions of menu items. Then, given the list of matches of his search, I must give the user the ability to throw the items they for sure don't want off the list, thus narrowing it down to what they do want.

My task is create a text box and a button with the label "Narrow It Down For Me!".

Initially, the user should just see a screen with the textbox and the "Narrow It Down For Me!" button. Once the user enters something into the textbox and clicks the button, my app will reach out to the server and retrieve the list of menu items for the entire menu. Once retrieved, my task is to loop through all the items and, for each item, do a simple check if the string being searched for by the user appears anywhere in the description of the item. If it does, that item gets placed in a special found array. If it doesn't, I simply move on to the next item.

Once your app goes through all the items, it should display the found list of items. Each item in the list should show the name of the menu item, its short_name, and the description.

I should also provide a "Don't want this one!" button next to each item in the list to give the user the ability to remove an item from that list.

If nothing is found as a result of the search OR if the user leaves the textbox empty and clicks the "Narrow It Down For Me!" button, I should simply display the message "Nothing found".
### Running
Follow [the link](https://cdn.rawgit.com/NRJman/AngularJS-training/230227c5/%22Menu%20items%20search%22%20app/index.html) to run this app.
