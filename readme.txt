To test api/food/add endpoint
curl.exe -X POST http://localhost:4000/api/food/add -F "name=white chocolate brownie" -F "description=Fresh brownie!" -F "price=400" -F "category=brownie" -F "image=@C:\Users\samjp\OneDrive\Desktop\Food-Ordering-Website-master\frontend\src\assets\cross_icon.png" -F "unit=1/2kg"

