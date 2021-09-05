# MUSEUM VISITORS
### How to run on your machine?
npm intall and npm start

#### Sample API call
GET /api/visitors?date=1404198000000&ignore=visitor_center_avila_adobe

It will return:
- The month of the search
- The year of the search
- The total visitors for the month, not counting the ignored museum
- The museum with the highest number of visitors, not counting the ignored museum
- The museum with the lowest number of visitors, not counting the ignored museum
- The ignored museum.

